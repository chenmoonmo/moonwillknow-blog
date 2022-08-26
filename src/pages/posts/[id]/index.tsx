import 'react-notion-x/src/styles.css';
import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from 'utils';
import { getPostDetailData } from 'slices/posts';

import React, { ReactElement, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { defaultMapImageUrl, NotionRenderer } from 'react-notion-x';
import { useColorMode, Skeleton } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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

const PostDetail: NextPage = (): ReactElement => {
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

  const coverImg = postDetail?.cover
    ? (defaultMapImageUrl(postDetail?.cover, postDetail as any) as string)
    : '';

  // TODO: 抽出cover组件
  let cover = (
    <motion.div className={styles.cover} layoutId={`cover-${id}`}>
      {coverImg && (
        <Image
          src={coverImg}
          alt=''
          layout='fill'
          objectFit='cover'
          objectPosition='center center'
        />
      )}
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
          <MotionSkeleton layoutId={`cover-${id}`} className={styles.skeletonCover} />
          <MotionSkeleton
            layoutId={`title-${id}`}
            className={styles.skeletonItem}
            h='2.5rem'
            my='3rem'
          />
          <MotionSkeleton className={styles.skeletonItem} h='2rem' />
          <MotionSkeleton className={styles.skeletonItem} h='1rem' m='1.5rem' />
          <MotionSkeleton className={styles.skeletonItem} h='1rem' />
          <MotionSkeleton className={styles.skeletonItem} h='1rem' mt='0.5rem' />
          <MotionSkeleton className={styles.skeletonItem} h='1rem' mt='0.5rem' />
          <MotionSkeleton className={styles.skeletonItem} h='1rem' mt='0.5rem' />
          <MotionSkeleton className={styles.skeletonItem} h='2rem' m='1.5rem' />
          <MotionSkeleton className={styles.skeletonItem} h='1rem' />
          <MotionSkeleton className={styles.skeletonItem} h='1rem' mt='0.5rem' />
          <MotionSkeleton className={styles.skeletonItem} h='1rem' mt='0.5rem' />
          <MotionSkeleton className={styles.skeletonItem} h='1rem' mt='0.5rem' />
        </>
      )}
    </main>
  );
};

export default PostDetail;
