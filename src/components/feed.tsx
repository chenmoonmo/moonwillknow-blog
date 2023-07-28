"use client";
import { IconButton, useToast } from "@chakra-ui/react";
import Image from "next/image";

export const Feed = () => {
  const toast = useToast();
  const copyFeed = () => {
    navigator.clipboard.writeText("https://moonwillknow.dev/feed");
    toast({
      title: "Copied to clipboard",
      position: "bottom-right",
      duration: 3000,
    });
  };

  return (
    <IconButton className="!fixed bottom-4 right-4" aria-label="RSS" onClick={copyFeed}>
      <Image src="/feed.jpg" alt={"RSS"} width={40} height={40} />
    </IconButton>
  );
};
