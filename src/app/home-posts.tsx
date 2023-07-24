import { PostCard } from "@/components/card";
import { getAllPages } from "@/utils";

export const HomePosts = async () => {
  let { posts } = await getAllPages();
  posts = posts.slice(0, 6);

  return posts.map((post) => {
    return (
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        description={post.description}
        image={post.cover}
        date={post.date}
        tags={post.tags}
        icon={post.icon}
      />
    );
  });
};
