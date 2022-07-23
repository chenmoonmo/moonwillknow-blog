import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { ReactElement, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";

import { request } from "utils";
import "react-notion-x/src/styles.css";

import { defaultMapImageUrl, NotionRenderer } from "react-notion-x";
import Link from "next/link";
import Image from "next/image";
import { Code } from "react-notion-x/build/third-party/code";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";
import { useColorMode } from "@chakra-ui/react";
import Error from "next/error";
import NotFound from "pages/404";

interface IProps {
  data: any;
}

const PostDetail: NextPage<IProps> = ({ data }): ReactElement => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const { id } = router.query;
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    console.log(data);
  }, []);

  // TODO: 抽出cover组件
  let cover = (
    <div className={styles.cover}>
      {data?.signed_urls?.[id as string] ? (
        <Image
          src={
            defaultMapImageUrl(
              data?.signed_urls?.[id as string],
              data?.block
            ) as string
          }
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      ) : null}
    </div>
  );

  if (isMounted && data === null) {
    return <NotFound />;
  }

  return (
    <main className={styles.postContainer}>
      {isMounted ? (
        <NotionRenderer
          darkMode={colorMode === "dark"}
          recordMap={data}
          fullPage={true}
          pageCover={cover}
          disableHeader
          components={{
            nextImage: Image,
            nextLink: Link,
            Code,
            Equation,
            Modal,
            Pdf,
          }}
        />
      ) : null}
    </main>
  );
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  let data = null;
  try {
    ({ data } = await request.get(`/notion/posts/${id}`));
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      data,
    },
  };
}

export default PostDetail;
