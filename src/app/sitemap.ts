import { MetadataRoute } from "next";
import { getPageProperty } from "notion-utils";
import { notion } from "@/utils/notion";
import { unwrapBlock } from "@/utils/unwrap-block";
import { SITE_URL } from "@/utils/site";

type StatusType = "Published" | "Draft" | "Revise" | "Idea" | null;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const recordMap = await notion.getPage("7943a9acb48b4fd6ae1784a4d1957e14");

  const { block } = recordMap;

  const pagesId: string[] = [];

  Object.keys(block).forEach((id) => {
    const pageBlock = unwrapBlock(block[id]?.value);
    if (!pageBlock) return;
    const status = getPageProperty<StatusType>("status", pageBlock, recordMap);

    if (status === "Published") {
      pagesId.push(id);
    }
  });

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/posts`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
    },
  ].concat(
    pagesId.map((id) => ({
      url: `${SITE_URL}/posts/${id}`,
      lastModified: new Date(),
    }))
  );
}
