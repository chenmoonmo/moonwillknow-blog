import { getAllPages } from "@/utils";
import { MainPosts } from "./posts";

export const QueryPosts = async () => {
  const { posts, tags } = await getAllPages();

  return <MainPosts posts={posts} tags={tags} />;
};
