import HomePosts from "./home-posts";
import Banner from "./banner";
import { Suspense } from "react";
import PostsLoading from "./posts-loading";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="max-w-7xl mx-auto mt-10 px-5 grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-3">
        <Suspense fallback={<PostsLoading />}>
          <HomePosts />
        </Suspense>
      </div>
    </main>
  );
}
