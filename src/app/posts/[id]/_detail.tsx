"use client";
import dynamic from "next/dynamic";
import React from "react";
import { NotionRenderer } from "react-notion-x";
import Link from "next/link";
import Image from "next/image";
import { ExtendedRecordMap } from "notion-types";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";

const Code = dynamic<any>(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    // Additional prismjs syntax
    // await Promise.all([
    //   import("prismjs/components/prism-bash"),
    //   import("prismjs/components/prism-c"),
    //   import("prismjs/components/prism-cpp"),
    //   import("prismjs/components/prism-docker"),
    //   import("prismjs/components/prism-js-templates"),
    //   import("prismjs/components/prism-diff"),
    //   import("prismjs/components/prism-git"),
    //   import("prismjs/components/prism-go"),
    //   import("prismjs/components/prism-graphql"),
    //   import("prismjs/components/prism-makefile"),
    //   import("prismjs/components/prism-markdown"),
    //   import("prismjs/components/prism-python"),
    //   import("prismjs/components/prism-rust"),
    //   import("prismjs/components/prism-solidity"),
    //   import("prismjs/components/prism-sql"),
    //   import("prismjs/components/prism-swift"),
    //   import("prismjs/components/prism-wasm"),
    //   import("prismjs/components/prism-yaml"),
    // ]);
    return m.Code;
  })
);

const Equation = dynamic<any>(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);

const Pdf = dynamic<any>(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
);

const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);

export const Detail = ({
  id,
  title,
  cover,
  recordMap,
}: {
  id: string;
  title: string;
  cover: string | undefined | null;
  recordMap: ExtendedRecordMap;
}) => {
  const { colorMode } = useColorMode();

  return (
    <NotionRenderer
      recordMap={recordMap}
      darkMode={colorMode === "dark"}
      fullPage
      disableHeader
      pageTitle={<motion.div layoutId={`title-${id}`}>{title}</motion.div>}
      pageCover={
        <motion.div
          className="relative h-40 w-full  rounded-md overflow-hidden"
          layoutId={`cover-${id}`}
        >
          {cover && (
            <Image
              className="object-cover"
              src={cover}
              alt=""
              layout="fill"
              objectPosition="center center"
            />
          )}
        </motion.div>
      }
      components={{
        nextImage: Image,
        nextLink: Link,
        Collection: () => <></>,
        Code,
        Equation,
        Modal,
        Pdf,
      }}
    />
  );
};
