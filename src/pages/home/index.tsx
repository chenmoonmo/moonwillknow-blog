import type { NextPage } from 'next'
import { Banner, PostCard } from 'components'

import styles from './index.module.scss'
import { useAppDispatch, useAppSelector } from 'utils'
import { getpostsListData } from 'slices/posts'
import { useRouter } from 'next/router'
import { useMount } from 'ahooks'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { IconButton, Skeleton } from '@chakra-ui/react'

interface IProps {
  // list: any;
}

const Home: NextPage<IProps> = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { isLoading, list } = useAppSelector((state) => state.posts)

  const handleToPosts = (id: string) => {
    router.push(`/posts/${id}`)
  }

  useMount(() => {
    dispatch(getpostsListData())
  })

  return (
    <main className={styles.homeContainer}>
      <Banner />
      <h2 className={styles.sectionTitle}>
        <span>LATEST POSTS 🌝</span>
        <Link href={`/posts`}>
          <IconButton
            className={styles.more}
            icon={<ArrowForwardIcon />}
            aria-label="more"
          />
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
          list
            ?.slice(0, 6)
            ?.map((data: any) => (
              <PostCard key={data.id} data={data} onClick={handleToPosts} />
            ))
        )}
      </div>
    </main>
  )
}

export default Home
