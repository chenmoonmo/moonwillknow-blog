import { getAllPages } from "@/utils";
import { PostCard } from "@/components/card";
import { Tags } from "./tags";
import isArray from "lodash/isArray";

export default async function Posts({
  searchParams,
}: {
  searchParams: {
    tags?: string[];
  };
}) {
  let { tags: searchTags } = searchParams;

  if (searchTags && !isArray(searchTags)) {
    searchTags = [searchTags];
  }

  const { posts, tags } = await getAllPages(searchTags);

  return (
    <>
      <Tags tags={tags} currentTags={searchTags} />
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
