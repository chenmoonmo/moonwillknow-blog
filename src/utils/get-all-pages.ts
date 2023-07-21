import { NotionAPI } from "notion-client";
import {
  getAllPagesInSpace,
  getPageProperty,
  getPageTitle,
} from "notion-utils";
import { defaultMapImageUrl } from "./map-image-url";
import sortBy from "lodash/sortBy";
import filter from "lodash/filter";

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

const getPostList = (tags?: string[]) => {
  const list = sortBy(Object.values(posts), (item) => -item.date);
  if (tags) {
    return filter(list, (item) => {
      return tags.some((tag) => item.tags.includes(tag));
    });
  }
  return list;
};

const getTags = () => sortBy(Array.from(allTags));

export const getAllPages = (
  tags?: string[]
): Promise<{
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
          posts: getPostList(tags),
          tags: getTags(),
        });
      })
      .catch((err) => {
        reject(err);
      });
    if (Object.keys(posts).length > 0) {
      resolve({
        posts: getPostList(tags),
        tags: getTags(),
      });
    }
  });
};
