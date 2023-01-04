import 'react-notion-x/src/styles.css';
import styles from './index.module.scss';

import React, { ReactElement, useEffect, useMemo } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { NotionRenderer } from 'react-notion-x';
import { useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getPostDetail } from 'api';
import { useMixpanel } from 'hooks';
import NotFound from 'pages/404';

interface IProps {
  data: any;
  error: any;
}

const Code = dynamic<any>(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);

const Equation = dynamic<any>(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);

const Pdf = dynamic<any>(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
  ssr: false,
});

const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false,
});

const PageCover: React.FC<{ id: string; cover: string }> = ({ id, cover }) => {
  return cover ? (
    <motion.div className={styles.cover} layoutId={`cover-${id}`}>
      <Image src={cover} alt='' layout='fill' objectFit='cover' objectPosition='center center' />
    </motion.div>
  ) : null;
};

const PostDetail: NextPage<IProps> = ({ data: postDetail, error }): ReactElement => {
  const { colorMode } = useColorMode();
  const { id } = useRouter().query;
  const { read } = useMixpanel();

  const title = useMemo(() => {
    return <motion.div layoutId={`title-${id}`}>{postDetail?.title}</motion.div>;
  }, [id, postDetail?.title]);

  useEffect(() => {
    read(id as string, postDetail?.title);
  }, []);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content={`https://moonwillknow.dev/posts/${id}`} />
        <meta name='twitter:title' content={postDetail?.title} />
        <meta name='twitter:description' content={postDetail?.summary} />
        <meta name='twitter:creator' content='@chenjustcam' />
        <meta name='twitter:image' content={postDetail?.cover} />
        <meta property='og:title' content={postDetail?.title} />
        <meta property='og:site_name' content='Moon Will Know Blog' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`https://moonwillknow.dev/posts/${id}`} />
        <meta property='og:image' content={postDetail?.cover} />
        <meta property='og:description' content={postDetail?.summary} />
      </Head>
      <main className={styles.postContainer}>
        <NotionRenderer
          darkMode={colorMode === 'dark'}
          recordMap={postDetail}
          fullPage={true}
          pageCover={<PageCover id={id as string} cover={postDetail.cover} />}
          disableHeader
          pageTitle={title}
          components={{
            nextImage: Image,
            nextLink: Link,
            Code,
            Equation,
            Modal,
            Pdf,
            Collection: React.Fragment,
          }}
        />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query;
    const data = await getPostDetail(id as string);
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {
        data: {},
        error: true,
      },
    };
  }
};

export default PostDetail;
