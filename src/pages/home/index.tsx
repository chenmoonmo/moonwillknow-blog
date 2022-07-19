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
  console.log(1)
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.posts);

  const handleToPosts = (id: string) => {
    router.push(`/posts/${id}`);
  };

  useMount(() => {
    dispatch(getpostsListData());
  });

  return (
    <main className={styles.container}>
      <Banner />
      <div className={styles.postsContainer}>
        {list.map((data: any) => (
          <PostCard key={data.id} data={data} onClick={handleToPosts} />
        ))}
      </div>
    </main>
  );
};

export default Home;
