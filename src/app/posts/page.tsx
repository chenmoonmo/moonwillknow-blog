import { getAllPages } from "@/utils";
import { MainPosts } from "./posts";

export const revalidate = 0;

export default async function Posts() {
  const { posts, tags } = await getAllPages();

  return <MainPosts posts={posts} tags={tags} />;
}
