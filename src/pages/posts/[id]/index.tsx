import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement} from "react";
import styles from "./index.module.scss";

import { request } from "utils";
import "react-notion-x/src/styles.css";
import {motion} from 'framer-motion';

import { defaultMapImageUrl, NotionRenderer } from "react-notion-x";
import Link from "next/link";
import Image from "next/image";
import { useColorMode } from "@chakra-ui/react";
import NotFound from "pages/404";
import Head from "next/head";
import dynamic from "next/dynamic";

const Code = dynamic<any>(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)

const Equation = dynamic<any>(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)

const Pdf = dynamic<any>(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false
  }
)

const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)

interface IProps {
  data: any;
}

const PostDetail: NextPage<IProps> = ({ data }): ReactElement => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const { id } = router.query;

  const { title, summary } = data;
  const coverImg = defaultMapImageUrl(
    data?.signed_urls?.[id as string],
    data?.block
  ) as string;



  // TODO: 抽出cover组件
  let cover = (
    <motion.div className={styles.cover} layoutId={`cover-${data.id}`}>
      {data?.signed_urls?.[id as string] ? (
        <Image
          src={coverImg}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      ) : null}
    </motion.div>
  );


  if ( data === null) {
    return <NotFound />;
  }

  return (
    <main className={styles.postContainer}>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.moonwillknow.dev" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={summary}
        />
        <meta name="twitter:creator" content="@chenjustcam" />
        <meta name="twitter:image"  content={coverImg} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Moon Will Know Blog" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://moonwillknow.dev/posts/${id}`}
        />
        <meta property="og:image" content={coverImg} />
        <meta property="og:description" content={summary} />
      </Head>
        <NotionRenderer
          darkMode={colorMode === "dark"}
          recordMap={data}
          fullPage={true}
          pageCover={cover}
          disableHeader
          pageTitle={<motion.h1 layoutId={`title-${data.id}`}>{title}</ motion.h1>}
          components={{
            nextImage: Image,
            nextLink: Link,
            Code,
            Equation,
            Modal,
            Pdf,
          }}
        />
    </main>
  );
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  let data = null;
  try {
    ({ data } = await request.get(`/notion/posts/${id}`));
  } catch {}

  return {
    props: {
      data,
    },
  };
}

export default PostDetail;
