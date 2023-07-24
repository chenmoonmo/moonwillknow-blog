import Banner from "./banner";
import { PostCard } from "@/components/card";
import { getAllPages } from "@/utils";

export default async function Home() {
  let { posts } = await getAllPages();
  posts = posts.slice(0, 6);

  return (
    <main>
      <Banner />
      <div className="max-w-7xl mx-auto mt-10 px-5 grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-3">
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              image={post.cover}
              date={post.date}
              tags={post.tags}
            />
          );
        })}
      </div>
    </main>
  );
}
