import type { NextPage } from 'next';
import { Banner, PostCard } from 'components';

import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from 'utils';
import { getPostsListData } from 'slices/posts';
import { useMount } from 'ahooks';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { IconButton, Skeleton, useColorMode } from '@chakra-ui/react';

interface IProps {
  // list: any;
}

const Home: NextPage<IProps> = () => {
  const dispatch = useAppDispatch();
  const { isLoading, list } = useAppSelector((state) => state.posts);
  const { setColorMode } = useColorMode();

  useMount(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setColorMode('dark');
      localStorage.theme = 'dark';
    } else {
      setColorMode('light');
      localStorage.theme = 'light';
    }

    if (list.length === 0) {
      dispatch(getPostsListData());
    }
  });

  return (
    <main className={styles.homeContainer}>
      <div className={styles.test}></div>
      <Banner />
      <h2 className={styles.sectionTitle}>
        <span>LATEST POSTS 🌝</span>
        <Link href={`/posts`}>
          <IconButton className={styles.more} icon={<ArrowForwardIcon />} aria-label='more' />
        </Link>
      </h2>
      <div className={styles.postsContainer}>
        {isLoading ? (
          <>
            <Skeleton height={180}></Skeleton>
            <Skeleton height={180}></Skeleton>
            <Skeleton height={180}></Skeleton>
            <Skeleton height={180}></Skeleton>
            <Skeleton height={180}></Skeleton>
            <Skeleton height={180}></Skeleton>
          </>
        ) : (
          list?.slice(0, 6)?.map((data: any) => <PostCard key={data.id} data={data} />)
        )}
      </div>
    </main>
  );
};

export default Home;
