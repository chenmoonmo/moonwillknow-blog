import { Skeleton, Tag, TagLabel } from '@chakra-ui/react';
import { useMount, useUpdateEffect } from 'ahooks';
import { PostCard } from 'components';
import { NextPage } from 'next';
import { ReactElement, useState } from 'react';
import { getPostsListData } from 'slices/posts';
import { useAppDispatch, useAppSelector } from 'utils';

import styles from './index.module.scss';

import { intersection, remove, cloneDeep } from 'lodash';

const Posts: NextPage = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { isLoading, list, tags } = useAppSelector((state) => state.posts);

  const [currentTags, setTags] = useState<string[]>(tags);

  const currentList = list.filter((item) => {
    return intersection(item.tags, currentTags).length > 0;
  });

  const handleFilte = (item: string) => {
    let cloneTags = cloneDeep(currentTags);

    if (cloneTags.includes(item)) {
      remove(cloneTags, (x) => x === item);
    } else {
      cloneTags = [...cloneTags, item];
    }
    setTags(cloneTags);
  };


  useMount(() => {
    if (list.length === 0) dispatch(getPostsListData());
  });

  useUpdateEffect(() => {
    if (currentTags.length === 0) {
      setTags(tags);
    }
  }, [tags]);

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
      <div
        className={styles.postsContainer}
      >
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
          currentList?.map((data: any) => <PostCard key={data.id} data={data} />)
        )}
      </div>
    </main>
  );
};

export default Posts;
