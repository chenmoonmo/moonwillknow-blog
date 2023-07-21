"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      setTheme(theme || "light");
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={theme === "dark" ? "rgb(30 41 59)" : "#fff"}
        />
      </Head>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
}
