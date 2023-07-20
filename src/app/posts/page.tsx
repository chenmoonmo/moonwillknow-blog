import { getAllPages } from "@/utils";
import { PostCard } from "./_card";
import { Tags } from "./_tags";

export default async function Posts() {
  const { posts, tags } = await getAllPages();

  return (
    <>
      <Tags tags={tags} />
      <div className="mt-5 grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-3">
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
      </div>
    </>
  );
}
