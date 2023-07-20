import { NotionAPI } from "notion-client";
import {
  getAllPagesInSpace,
  getPageProperty,
  getPageTitle,
} from "notion-utils";
import { defaultMapImageUrl } from "./map-image-url";
import sortBy from "lodash/sortBy";

type StatusType = "Published" | "Draft" | "Revise" | "Idea" | null;

type PostInfoType = {
  id: string;
  date: number;
  title: string;
  description: string;
  pageCoverUrl: string | null;
  status: StatusType;
  tags: string[];
};

const posts: {
  [id: string]: PostInfoType;
} = {};

const allTags = new Set<string>();

const getPostList = () => {
  return sortBy(Object.values(posts), (item) => -item.date);
};

export const getAllPages = (): Promise<{
  posts: PostInfoType[];
  tags: string[];
}> => {
  return new Promise((resolve, reject) => {
    getAllPagesInSpace(
      "8980bf67b6434f8e8d5edb1347a2f7e7",
      undefined,
      (pageId: string) => {
        const notion = new NotionAPI();
        return notion.getPage(pageId);
      }
    )
      .then((pages) => {
        Object.keys(pages).map((id) => {
          const recordMap = pages[id]!;
          const title = getPageTitle(recordMap);
          const pageBlock =
            recordMap.block[Object.keys(recordMap.block)[0]]?.value;
          const description = getPageProperty<string>(
            "summary",
            pageBlock,
            recordMap
          );

          const date = getPageProperty<number>("date", pageBlock, recordMap);
          const tags = getPageProperty<string[]>("tags", pageBlock, recordMap);
          const status = getPageProperty<StatusType>(
            "status",
            pageBlock,
            recordMap
          );

          const pageCoverUrl = pageBlock.format?.page_cover
            ? defaultMapImageUrl(pageBlock.format.page_cover, pageBlock)
            : "";

          if (status === "Published") {
            tags?.forEach((tag) => allTags.add(tag));
            posts[id] = {
              id,
              date,
              title,
              description,
              pageCoverUrl,
              status,
              tags,
            };
          }
        });
        resolve({
          posts: getPostList(),
          tags: Array.from(allTags),
        });
      })
      .catch((err) => {
        reject(err);
      });
    if (Object.keys(posts).length > 0) {
      resolve({
        posts: getPostList(),
        tags: Array.from(allTags),
      });
    }
  });
};
