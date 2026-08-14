import mixpanel from "mixpanel-browser";
import { useCallback, useLayoutEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export const useMixpanel = () => {
  const mixpanelRef = useRef<any>(null);

  const getUuid = useCallback(() => {
    let uuid = localStorage.getItem("uuid");
    if (!uuid) {
      uuid = uuidv4();
      localStorage.setItem("uuid", uuid);
    }
    return uuid;
  }, []);

  const visit = useCallback(() => {
    const uuid = getUuid();
    mixpanelRef.current?.track("visit", { uuid });
  }, [getUuid]);

  const read = useCallback((pageId: string, pageTitle: string) => {
    const uuid = getUuid();
    mixpanelRef.current?.track("read", {
      uuid,
      pageId,
      pageTitle,
    });
  }, [getUuid]);

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
