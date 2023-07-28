import { NotionAPI } from "notion-client";
import { getPageProperty } from "notion-utils";
import { defaultMapImageUrl } from "@/utils/map-image-url";
import RSS from "rss";

type StatusType = "Published" | "Draft" | "Revise" | "Idea" | null;

export async function GET(res: Request) {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("7943a9acb48b4fd6ae1784a4d1957e14");

  const { block } = recordMap;

  const feed = new RSS({
    title: "Moon will know",
    site_url: "moonwillknow.dev",
    feed_url: "moonwillknow.dev/feed",
    language: "zh-cn",
    ttl: 60,
  });

  Object.keys(block).forEach((id) => {
    const pageBlock = block[id].value;
    const title = getPageProperty<string>("title", pageBlock, recordMap);
    const date = getPageProperty<number>("date", pageBlock, recordMap);
    const status = getPageProperty<StatusType>("status", pageBlock, recordMap);
    const description = getPageProperty(
      "summary",
      pageBlock,
      recordMap
    ) as string;
    const cover = pageBlock?.format?.page_cover
      ? defaultMapImageUrl(pageBlock?.format?.page_cover, pageBlock)
      : null;

    if (status === "Published") {
      feed.item({
        title,
        url: `https://moonwillknow.dev/posts/${id}`,
        date: new Date(date).toUTCString(),
        description,
        enclosure: cover
          ? {
              url: cover,
              type: "image/jpeg",
            }
          : undefined,
      });
    }
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "content-type": "application/xml;charset=UTF-8",
      "cache-control": "s-maxage=60, stale-while-revalidate",
    },
  });
}
