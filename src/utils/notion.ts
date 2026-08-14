import { NotionAPI } from "notion-client";

const NOTION_USER_AGENT =
  "Mozilla/5.0 (compatible; MoonWillKnow/1.0; +https://moonwillknow.dev)";

export const notion = new NotionAPI({
  ofetchOptions: {
    headers: {
      "user-agent": NOTION_USER_AGENT,
    },
  },
});
