"use client";

import { useMixpanel } from "@/hooks/useMixPanel";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const routerParams = useParams();
  const pathName = usePathname();
  const { visit, read } = useMixpanel();

  useEffect(() => {
    if (pathName.startsWith("/posts") && routerParams.id) {
      read(routerParams.id as string, document.title);
    } else {
      visit();
    }
  }, [pathName, read, routerParams.id, visit]);

  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
