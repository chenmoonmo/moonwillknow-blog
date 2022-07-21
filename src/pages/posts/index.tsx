import { ScaleFade, Skeleton, Tag, TagLabel } from '@chakra-ui/react'
import { useMount, useUpdateEffect } from 'ahooks'
import { PostCard } from 'components'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import { getpostsListData } from 'slices/posts'
import { useAppDispatch, useAppSelector } from 'utils'

import styles from './index.module.scss'

import { intersection, remove, cloneDeep } from 'lodash'

const Posts: NextPage = (): ReactElement => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { isLoading, list, tags } = useAppSelector((state) => state.posts)

  const [currentTags, setTags] = useState<string[]>(tags)

  const handleToPosts = (id: string) => {
    router.push(`/posts/${id}`)
  }

  const handleFilte = (item: string) => {
    if (currentTags.includes(item)) {
      setTags((preTags) => {
        let cloneTags = cloneDeep(preTags)
        remove(cloneTags, (x) => x === item)
        return cloneTags
      })
    } else {
      setTags((preTags) => {
        return [...preTags, item]
      })
    }
  }

  useMount(() => {
    dispatch(getpostsListData())
  })

  useUpdateEffect(() => {
    if (currentTags.length === 0) {
      setTags(tags)
    }
  }, [tags])

  return (
    <main className={styles.container}>
      <div className={styles.tags}>
        {tags?.map((item: string) => (
          <Tag
            className={styles.tag}
            key={item}
            size="sm"
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
            <Skeleton height={180}></Skeleton>
            <Skeleton height={180}></Skeleton>
            <Skeleton height={180}></Skeleton>
            <Skeleton height={180}></Skeleton>
            <Skeleton height={180}></Skeleton>
            <Skeleton height={180}></Skeleton>
          </>
        ) : (
          list?.map((data: any) => (
            <ScaleFade
              key={data.id}
              initialScale={0.9}
              in={intersection(data.tags, currentTags).length > 0}
              unmountOnExit
            >
              <PostCard data={data} onClick={handleToPosts} />
            </ScaleFade>
          ))
        )}
      </div>
    </main>
  )
}

export default Posts
