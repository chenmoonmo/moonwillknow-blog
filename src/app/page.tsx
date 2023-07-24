import Banner from "./banner";
import { getAllPages } from "@/utils";
import { Suspense } from "react";
import { HomePosts } from "./home-posts";
import { HomePostsLoading } from "./home-posts-loading";

export const revalidate = 0;

export default async function Home() {
  let { posts } = await getAllPages();
  posts = posts.slice(0, 6);

  return (
    <main>
      <Banner />
      <div className="max-w-7xl mx-auto mt-10 px-5 grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-3">
        <Suspense fallback={<HomePostsLoading />}>
          <HomePosts />
        </Suspense>
      </div>
    </main>
  );
}
