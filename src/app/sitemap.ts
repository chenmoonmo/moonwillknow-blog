import { MetadataRoute } from "next";
import { NotionAPI } from "notion-client";
import { getPageProperty } from "notion-utils";

type StatusType = "Published" | "Draft" | "Revise" | "Idea" | null;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("7943a9acb48b4fd6ae1784a4d1957e14");

  const { block } = recordMap;

  const pagesId: string[] = [];

  Object.keys(block).forEach((id) => {
    const pageBlock = block[id].value;
    const status = getPageProperty<StatusType>("status", pageBlock, recordMap);

    if (status === "Published") {
      pagesId.push(id);
    }
  });

  return [
    {
      url: "https://moonwillknow.dev",
      lastModified: new Date(),
    },
    {
      url: "https://moonwillknow.dev/posts",
      lastModified: new Date(),
    },
    {
      url: "https://moonwillknow.dev/about",
      lastModified: new Date(),
    },
  ].concat(
    pagesId.map((id) => ({
      url: `https://moonwillknow.dev/posts/${id}`,
      lastModified: new Date(),
    }))
  );
}
