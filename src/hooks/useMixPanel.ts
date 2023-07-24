import mixpanel from "mixpanel-browser";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

export const useMixpanel = () => {
  
  mixpanel.init(process.env.MIX_PANEL_TOKEN as string, {
    debug: process.env.NODE_ENV === "development",
  });

  const visit = useCallback(() => {
    let uuid = localStorage.getItem("uuid");
    if (!uuid) {
      uuid = uuidv4();
      localStorage.setItem("uuid", uuid);
    }
    mixpanel.track("visit", { uuid });
  }, []);

  const read = useCallback((pageId: string, pageTitle: string) => {
    let uuid = localStorage.getItem("uuid");
    mixpanel.track("read", { uuid, pageId, pageTitle });
  }, []);

  return {
    visit,
    read,
  };
};
