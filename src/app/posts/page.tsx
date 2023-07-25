import { Suspense } from "react";
import { QueryPosts } from "./query-posts";
import Loading from "./post-loading";

export const revalidate = 60;

export default async function Posts() {
  return (
    <Suspense fallback={<Loading />}>
      <QueryPosts />
    </Suspense>
  );
}
