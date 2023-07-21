import { NotionAPI } from "notion-client";
import { Detail } from "./detail";
import { getBlockIcon, getPageProperty, getPageTitle } from "notion-utils";
import { defaultMapImageUrl } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moon Will Know",
  description: "Moon will know",
  twitter: {
    card: "summary_large_image",
    title: "Moon Will Know",
    images: "/",
  },
};

export default async function PostDeatil({
  params: { id },
}: {
  params: { id: string };
}) {
  
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(id);

  const title = getPageTitle(recordMap);
  const pageBlock = recordMap.block[Object.keys(recordMap.block)[0]]?.value;
  const pageIcon = getBlockIcon(pageBlock, recordMap);
  const description = getPageProperty(
    "summary",
    pageBlock,
    recordMap
  ) as string;

  const pageCoverUrl = defaultMapImageUrl(
    pageBlock.format.page_cover,
    pageBlock
  );

  metadata.title = title;
  metadata.icons = pageIcon;
  metadata.openGraph = {
    title,
    images: pageCoverUrl!,
  };
  metadata.twitter = {
    title,
    description,
    images: pageCoverUrl!,
    card: "summary_large_image",
  };

  return (
    <Detail id={id} title={title} cover={pageCoverUrl} recordMap={recordMap} />
  );
}
