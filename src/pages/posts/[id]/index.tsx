import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import styles from './index.module.scss';
import 'react-notion-x/src/styles.css';
import { motion } from 'framer-motion';

import { defaultMapImageUrl, NotionRenderer } from 'react-notion-x';
import Link from 'next/link';
import Image from 'next/image';
import { useColorMode, Skeleton } from '@chakra-ui/react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useAppDispatch, useAppSelector } from 'utils';
import { getPostDetailData } from 'slices/posts';

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

const MotionSkeleton = motion(Skeleton);

interface IProps {}

const PostDetail: NextPage<IProps> = (): ReactElement => {
  const { colorMode } = useColorMode();
  const { id } = useRouter().query;
  const dispatch = useAppDispatch();
  const postDetail = useAppSelector((state) => {
    return state.posts.posts?.[id as string];
  });

  useEffect(() => {
    if (id && !postDetail) {
      dispatch(getPostDetailData(id as string));
    }
  }, [id]);

  const coverImg = defaultMapImageUrl(
    postDetail?.signed_urls?.[id as string],
    postDetail?.block
  ) as string;

  // TODO: 抽出cover组件
  let cover = (
    <motion.div className={styles.cover} layoutId={`cover-${id}`}>
      {postDetail?.signed_urls?.[id as string] ? (
        <Image src={coverImg} alt='' layout='fill' objectFit='cover' objectPosition='bottom' />
      ) : null}
    </motion.div>
  );

  return (
    <main className={styles.postContainer}>
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content='https://www.moonwillknow.dev' />
        <meta name='twitter:title' content={postDetail?.title} />
        <meta name='twitter:description' content={postDetail?.summary} />
        <meta name='twitter:creator' content='@chenjustcam' />
        <meta name='twitter:image' content={coverImg} />
        <meta property='og:title' content={postDetail?.title} />
        <meta property='og:site_name' content='Moon Will Know Blog' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`https://moonwillknow.dev/posts/${id}`} />
        <meta property='og:image' content={coverImg} />
        <meta property='og:description' content={postDetail?.summary} />
      </Head>
      {postDetail ? (
        <NotionRenderer
          darkMode={colorMode === 'dark'}
          recordMap={postDetail}
          fullPage={true}
          pageCover={cover}
          disableHeader
          pageTitle={<motion.div layoutId={`title-${id}`}>{postDetail?.title}</motion.div>}
          components={{
            nextImage: Image,
            nextLink: Link,
            Code,
            Equation,
            Modal,
            Pdf,
            Collection: () => React.Fragment,
          }}
        />
      ) : (
        <>
          <MotionSkeleton layoutId={`cover-${id}`} height='10rem' />
          <MotionSkeleton
            width='var(--notion-max-width)'
            layoutId={`title-${id}`}
            height='2.5rem'
            my='3rem'
            mx='auto'
          />
          <MotionSkeleton width='var(--notion-max-width)' height='2rem' mx='auto' />
          <MotionSkeleton width='var(--notion-max-width)' height='1rem' m='1.5rem' mx='auto' />
          <MotionSkeleton width='var(--notion-max-width)' height='1rem' mx='auto' />
          <MotionSkeleton width='var(--notion-max-width)' height='1rem' mt='0.5rem' mx='auto' />
          <MotionSkeleton width='var(--notion-max-width)' height='1rem' mt='0.5rem' mx='auto' />
          <MotionSkeleton width='var(--notion-max-width)' height='1rem' mt='0.5rem' mx='auto' />
          <MotionSkeleton width='var(--notion-max-width)' height='2rem' m='1.5rem' mx='auto' />
          <MotionSkeleton width='var(--notion-max-width)' height='1rem' mx='auto' />
          <MotionSkeleton width='var(--notion-max-width)' height='1rem' mt='0.5rem' mx='auto' />
          <MotionSkeleton width='var(--notion-max-width)' height='1rem' mt='0.5rem' mx='auto' />
          <MotionSkeleton width='var(--notion-max-width)' height='1rem' mt='0.5rem' mx='auto' />
        </>
      )}
    </main>
  );
};

export default PostDetail;
