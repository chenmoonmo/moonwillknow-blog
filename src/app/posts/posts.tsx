"use client";
import { PostCard } from "@/components/card";
import { Tags } from "./tags";
import { useMemo, useState } from "react";
import filter from "lodash/filter";

type PostsProps = {
  posts: any[];
  tags: string[];
};

export const MainPosts: React.FC<PostsProps> = ({ posts, tags }) => {
  const [currentTags, setCurrentTags] = useState<string[]>(tags);

  const filterPosts = useMemo(() => {
    if (currentTags) {
      return filter(posts, (item) => {
        return currentTags.some((tag) => item.tags.includes(tag));
      });
    }
    return posts;
  }, [currentTags, posts]);

  return (
    <>
      <Tags
        tags={tags}
        currentTags={currentTags}
        onTagsChange={setCurrentTags}
      />
      <div className="mt-5 grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-3">
        {filterPosts.map((post) => {
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
};
