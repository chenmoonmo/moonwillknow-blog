import mixpanel from "mixpanel-browser";
import { useCallback, useLayoutEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export const useMixpanel = () => {
  const mixpanelRef = useRef<any>(null);

  const visit = useCallback(() => {
    let uuid = localStorage.getItem("uuid");
    if (!uuid) {
      uuid = uuidv4();
      localStorage.setItem("uuid", uuid);
    }
    mixpanelRef.current?.track("visit", { uuid });
  }, []);

  const read = useCallback((pageId: string, pageTitle: string) => {
    let uuid = localStorage.getItem("uuid");
    mixpanelRef.current?.track("read", {
      uuid,
      pageId,
      pageTitle: document.title,
    });
  }, []);

  useLayoutEffect(() => {
    if (!process.env.MIX_PANEL_TOKEN) return;

    mixpanel.init(process.env.MIX_PANEL_TOKEN as string, {
      debug: process.env.NODE_ENV === "development",
    });
    mixpanelRef.current = mixpanel;
  }, []);

  return {
    visit,
    read,
  };
};
