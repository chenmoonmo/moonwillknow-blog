import type { NextPage } from "next";
import { Banner, PostCard } from "components";

import styles from "./index.module.scss";
import { useAppDispatch, useAppSelector } from "utils";
import { getpostsListData } from "slices/posts";
import { useRouter } from "next/router";
import { useMount } from "ahooks";

interface IProps {
  // list: any;
}

const Home: NextPage<IProps> = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.posts);
  console.log(list)

  const handleToPosts = (id: string) => {
    router.push(`/posts/${id}`);
  };

  useMount(() => {
    dispatch(getpostsListData());
  });

  return (
    <main className={styles.homeContainer}>
      <Banner />
      <div className={styles.postsContainer}>
        {list?.map((data: any) => (
          <PostCard key={data.id} data={data} onClick={handleToPosts} />
        ))}
      </div>
    </main>
  );
};

export default Home;
