import { NotionAPI } from "notion-client";
import { getAllPagesInSpace } from "notion-utils";
import sortBy from "lodash/sortBy";
import filter from "lodash/filter";

import { getPageInfoFromRecordMap } from "./get-page";
import { cache } from "react";

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

export const getAllPages = cache(
  (): Promise<{
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
          const posts: {
            [id: string]: PostInfoType;
          } = {};
          const allTags = new Set<string>();

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
            posts: sortBy(
              filter(
                Object.values(posts),
                (item) => item.status === "Published"
              ),
              (item) => -item.date
            ),
            tags: sortBy(filter(Array.from(allTags), (item) => !!item)) ?? [],
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
);
