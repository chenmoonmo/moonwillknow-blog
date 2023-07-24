import { NotionAPI } from "notion-client";
import { getAllPagesInSpace } from "notion-utils";
import sortBy from "lodash/sortBy";
import filter from "lodash/filter";

import { getPageInfoFromRecordMap } from "./get-page";

type StatusType = "Published" | "Draft" | "Revise" | "Idea" | null;

type PostInfoType = {
  id: string;
  date: number;
  title: string;
  description: string;
  cover: string | null;
  status: StatusType;
  tags: string[];
  recordMap: any;
  icon: string;
};

const posts: {
  [id: string]: PostInfoType;
} = {};

const allTags = new Set<string>();

const getPostList = () => {
  const list = sortBy(
    filter(Object.values(posts), (item) => item.status === "Published"),
    (item) => -item.date
  );
  return list;
};

const getTags = () => sortBy(filter(Array.from(allTags), (item) => !!item)) ?? [];

export const getAllPages = (): Promise<{
  posts: PostInfoType[];
  tags: string[];
}> => {
  return new Promise((resolve, reject) => {
    getAllPagesInSpace(
      process.env.NOTION_SPACE_ID as string,
      undefined,
      (pageId: string) => {
        const notion = new NotionAPI();
        return notion.getPage(pageId);
      }
    )
      .then((pages) => {
        Object.keys(pages).map((id) => {
          const recordMap = pages[id]!;
          const pageDeatail = getPageInfoFromRecordMap(recordMap);
          const { tags } = pageDeatail;
          tags?.forEach((tag) => allTags.add(tag));
          posts[id] = {
            id,
            ...pageDeatail,
          };
        });
        resolve({
          posts: getPostList(),
          tags: getTags(),
        });
      })
      .catch((err) => {
        reject(err);
      });

    if (Object.keys(posts).length > 0) {
      resolve({
        posts: getPostList(),
        tags: getTags(),
      });
    }
  });
};
