import { getAllPages } from "@/utils";
import { PostCard } from "@/components/card";

export default async function HomePosts() {
  let { posts } = await getAllPages();

  posts = posts.slice(0, 6);

  return (
    <>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            image={post.pageCoverUrl}
            date={post.date}
            tags={post.tags}
          />
        );
      })}
    </>
  );
}
