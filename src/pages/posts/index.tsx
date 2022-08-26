import { Skeleton, Tag, TagLabel, Tooltip } from '@chakra-ui/react';
import { useMount, useUpdateEffect } from 'ahooks';
import { PostCard } from 'components';
import { NextPage } from 'next';
import { ReactElement, useState, MouseEvent } from 'react';
import { getPostsListData } from 'slices/posts';
import { useAppDispatch, useAppSelector } from 'utils';

import styles from './index.module.scss';

import { intersection, remove, cloneDeep } from 'lodash';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

const Posts: NextPage = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { isLoading, list, tags } = useAppSelector((state) => state.posts);

  const [currentTags, setTags] = useState<string[]>(tags);

  const currentList = list.filter((item) => {
    return intersection(item.tags, currentTags).length > 0;
  });

  const handleFilte = (e: MouseEvent<HTMLSpanElement>, item: string) => {
    e.preventDefault();
    if (e.metaKey || e.ctrlKey) {
      setTags((preTag) => {
        if (preTag.includes(item)) {
          return tags.filter((j) => j !== item);
        }
        return [item];
      });
      return;
    }

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
      <Skeleton minH={6} className={styles.tags} isLoaded={!isLoading}>
        {tags?.map((item: string) => (
          <Tag
            className={styles.tag}
            key={item}
            size='sm'
            colorScheme={currentTags?.includes(item) ? 'messenger' : 'gray'}
            onClick={(e) => handleFilte(e, item)}
          >
            <TagLabel>{item}</TagLabel>
          </Tag>
        ))}
        {tags.length > 0 && (
          <Tooltip label='⌘+Click To Reverse' placement='top'>
            <QuestionOutlineIcon cursor='pointer' />
          </Tooltip>
        )}
      </Skeleton>

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
          currentList?.map((data: any) => <PostCard key={data.id} data={data} />)
        )}
      </div>
    </main>
  );
};

export default Posts;
