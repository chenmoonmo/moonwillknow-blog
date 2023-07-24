import { NotionAPI } from "notion-client";
import { cache } from "react";
import { getBlockIcon, getPageProperty, getPageTitle } from "notion-utils";
import { defaultMapImageUrl } from "./map-image-url";
import { ExtendedRecordMap } from "notion-types";

type StatusType = "Published" | "Draft" | "Revise" | "Idea" | null;

export const getPageInfoFromRecordMap = (recordMap: ExtendedRecordMap) => {
  const pageBlock = recordMap.block[Object.keys(recordMap.block)[0]]?.value;

  const title = getPageTitle(recordMap);
  const icon = getBlockIcon(pageBlock, recordMap);
  const description = getPageProperty(
    "summary",
    pageBlock,
    recordMap
  ) as string;
  const date = getPageProperty<number>("date", pageBlock, recordMap);
  const tags = getPageProperty<string[]>("tags", pageBlock, recordMap);
  const status = getPageProperty<StatusType>("status", pageBlock, recordMap);
  const cover = pageBlock?.format?.page_cover
    ? defaultMapImageUrl(pageBlock?.format?.page_cover, pageBlock)
    : null;

  return {
    recordMap,
    description,
    status,
    title,
    icon,
    cover,
    date,
    tags,
  };
};

export const getPage = cache(async (id: string) => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(id);

  return getPageInfoFromRecordMap(recordMap);
});
