import { NotionAPI } from "notion-client";
import { getBlockIcon, getPageProperty } from "notion-utils";
import sortBy from "lodash/sortBy";
import filter from "lodash/filter";

import { cache } from "react";
import { defaultMapImageUrl } from "./";

type StatusType = "Published" | "Draft" | "Revise" | "Idea" | null;

type PostInfoType = {
  id: string;
  date: number;
  title: string;
  description: string;
  cover: string | null;
  status: StatusType;
  tags: string[];
  icon: string;
};

export const getAllPages = cache(
  async (): Promise<{
    posts: PostInfoType[];
    tags: string[];
  }> => {
    const notion = new NotionAPI();
    const recordMap = await notion.getPage("7943a9acb48b4fd6ae1784a4d1957e14");
    const { block } = recordMap;

    const pages: PostInfoType[] = [];

    const allTags = new Set<string>();

    Object.keys(block).forEach((id) => {
      const pageBlock = block[id].value;
      const title = getPageProperty<string>("title", pageBlock, recordMap);
      const date = getPageProperty<number>("date", pageBlock, recordMap);
      const tags = getPageProperty<string[]>("tags", pageBlock, recordMap);
      const status = getPageProperty<StatusType>(
        "status",
        pageBlock,
        recordMap
      );
      const icon = getBlockIcon(pageBlock, recordMap);
      const description = getPageProperty(
        "summary",
        pageBlock,
        recordMap
      ) as string;
      const cover = pageBlock?.format?.page_cover
        ? defaultMapImageUrl(pageBlock?.format?.page_cover, pageBlock)
        : null;

      tags?.forEach((tag) => allTags.add(tag));

      pages.push({
        id,
        title,
        date,
        tags,
        status,
        icon,
        description,
        cover,
      });
    });

    return {
      tags: sortBy(filter(Array.from(allTags), (item) => !!item)) ?? [],
      posts: sortBy(
        filter(Object.values(pages), (page) => page.status === "Published"),
        (page) => -page.date
      ),
    };
  }
);
