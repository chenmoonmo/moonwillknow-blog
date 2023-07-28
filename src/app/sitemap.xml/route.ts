import { NotionAPI } from "notion-client";
import { getPageProperty } from "notion-utils";

type StatusType = "Published" | "Draft" | "Revise" | "Idea" | null;

export async function GET(res: Request) {
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

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://moonwillknow.dev</loc>
    </url>
    <url>
        <loc>https://moonwillknow.dev/posts</loc>
    </url>
    <url>
    <loc>https://moonwillknow.dev/about</loc>
    </url>
    ${pagesId
      .map((id) =>
        `
          <url>
            <loc>https://moonwillknow.dev/posts/${id}</loc>
          </url>
        `.trim()
      )
      .join("")}
  </urlset>`,
    {
      headers: {
        "content-type": "application/xml;charset=UTF-8",
        "cache-control": "s-maxage=60, stale-while-revalidate",
      },
    }
  );
}
