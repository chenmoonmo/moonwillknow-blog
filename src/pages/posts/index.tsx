import { ScaleFade, Skeleton, Tag, TagLabel } from '@chakra-ui/react';
import { useMount, useUpdateEffect } from 'ahooks';
import { PostCard } from 'components';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { getpostsListData } from 'slices/posts';
import { useAppDispatch, useAppSelector } from 'utils';

import styles from './index.module.scss';

import { intersection, remove, cloneDeep } from 'lodash';
import { AnimatePresence, motion } from 'framer-motion';

const Posts: NextPage = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { isLoading, list, tags } = useAppSelector((state) => state.posts);

  const [currentTags, setTags] = useState<string[]>(tags);

  const [currentList, setList] = useState(list);

  const handleFilte = (item: string) => {
    let cloneTags = cloneDeep(currentTags);

    if (cloneTags.includes(item)) {
      remove(cloneTags, (x) => x === item);
    } else {
      cloneTags = [...cloneTags, item];
    }
    setTags(cloneTags);
    setList(() => {
      return list.filter((item) => {
        return intersection(item.tags, cloneTags).length > 0;
      });
    });
  };

  useMount(() => {
    dispatch(getpostsListData());
  });

  useUpdateEffect(() => {
    if (currentTags.length === 0) {
      setTags(tags);
    }
  }, [tags]);

  useUpdateEffect(() => {
    if (currentList.length === 0) {
      setList(list);
    }
  }, [list]);

  return (
    <main className={styles.container}>
      <div className={styles.tags}>
        {tags?.map((item: string) => (
          <Tag
            className={styles.tag}
            key={item}
            size='sm'
            colorScheme={currentTags?.includes(item) ? 'messenger' : 'gray'}
            onClick={() => handleFilte(item)}
          >
            <TagLabel>{item}</TagLabel>
          </Tag>
        ))}
      </div>
      <div className={styles.postsContainer}>
        {isLoading ? (
          <>
            <Skeleton height={180} />
            <Skeleton height={180} />
            <Skeleton height={180} />
            <Skeleton height={180} />
            <Skeleton height={180} />
            <Skeleton height={180} />
          </>
        ) : (
          <AnimatePresence>
            {currentList?.map((data: any) => (
              <PostCard key={data.id} data={data} />
            ))}
          </AnimatePresence>
        )}
      </div>
    </main>
  );
};

export default Posts;
