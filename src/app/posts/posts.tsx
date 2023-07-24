"use client";
import { PostCard } from "@/components/card";
import { Tags } from "./tags";
import { useMemo, useState } from "react";
import filter from "lodash/filter";
import { Me } from "@/components/me";

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
      {filterPosts.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-40">
          <Me className="w-[100px] h-[127px]" />
          <svg
            width="200"
            viewBox="0 0 522 270"
            fill="none"
            stroke-width="10"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-3 stroke-current dark:stroke-white"
          >
            <path
              d="M21.0096 31.2135C30.1403 31.2135 38.5859 44.9824 45.0861 50.6347C48.1354 53.2863 51.7215 58.3531 55.0513 60.018"
              stroke-linecap="round"
            />
            <path
              d="M3.98876 96.6783C13.2176 96.6783 22.4614 97.9876 31.484 97.9876"
              stroke-linecap="round"
            />
            <path
              d="M31.484 266.887C31.484 251.951 31.484 237.015 31.484 222.08C31.484 204.259 34.1026 186.633 34.1026 168.69"
              stroke-linecap="round"
            />
            <path
              d="M94.3301 25.9763C94.3301 45.1793 94.3301 64.3823 94.3301 83.5853C94.3301 88.3527 93.1377 108.754 87.7837 95.369"
              stroke-linecap="round"
            />
            <path
              d="M96.9487 27.2856C114.309 27.2856 131.669 27.2856 149.03 27.2856C155.229 27.2856 153.639 32.0083 151.866 37.1781C147.765 49.1405 145.968 60.8497 143.429 73.0382C142.941 75.3787 141.214 83.751 144.083 85.1856C148.521 87.4046 156.246 86.6709 161.104 86.1312C165.248 85.6707 170.935 83.2902 174.488 80.9668C177.909 78.7302 187.764 74.2532 182.053 73.111"
              stroke-linecap="round"
            />
            <path
              d="M102.186 134.648C114.293 134.648 125.979 130.72 138.192 130.72C143.573 130.72 137.1 140.707 136.228 142.576C131.418 152.884 127.372 163.987 123.135 174.581C117.803 187.911 111.192 206.255 101.459 217.133C100.166 218.578 99.1187 223.68 96.9487 223.68C94.3407 223.68 94.6125 222.229 91.7115 223.68"
              stroke-linecap="round"
            />
            <path
              d="M87.7837 160.834C99.5953 160.834 110.334 161.974 120.516 168.762C133.559 177.458 146.447 186.977 160.377 194.221C168.782 198.591 175.634 204.779 184.672 207.968C188.188 209.209 198.875 211.896 195.146 211.896"
              stroke-linecap="round"
            />
            <path
              d="M230.497 52.1622C263.326 52.1622 296.156 52.1622 328.985 52.1622C341.351 52.1622 353.716 52.1622 366.082 52.1622C367.797 52.1622 378.197 52.427 371.901 50.8529"
              stroke-linecap="round"
            />
            <path
              d="M309.055 3.71838C309.055 21.8939 301.41 41.8249 295.234 58.5633C288.484 76.8595 282.676 98.9221 267.157 112.099C253.903 123.352 240.417 133.339 222.641 133.339"
              stroke-linecap="round"
            />
            <path
              d="M275.013 118.936C275.013 153.317 275.013 187.699 275.013 222.08C275.013 225.522 276.223 231.457 274.94 234.663C274.848 234.895 270.511 231.903 269.776 231.536"
              stroke-linecap="round"
            />
            <path
              d="M277.631 109.771C285.924 109.771 294.216 109.771 302.508 109.771C306.015 109.771 313.599 108.365 316.256 111.226C324.755 120.379 330.245 132.364 333.204 144.468C336.736 158.918 338.016 173.572 339.459 188.329C340.292 196.843 339.533 209.187 342.805 217.133C344.172 220.454 330.971 216.633 329.712 215.824C324.875 212.715 322.292 210.731 318.22 206.659"
              stroke-linecap="round"
            />
            <path
              d="M293.343 152.978C300.96 152.978 308.274 151.669 315.601 151.669"
              stroke-linecap="round"
            />
            <path d="M290.724 193.566H309.055" stroke-linecap="round" />
            <path
              d="M457.005 52.1622C462.841 52.1622 468.43 48.6546 473.953 46.9978C480.677 44.9807 486.012 44.3064 493.011 44.3064C500.886 44.3064 511.59 41.3383 514.323 50.562C518.021 63.0424 511.711 70.7614 504.721 79.6574C501.862 83.297 497.881 85.6534 494.684 88.5315C491.516 91.3826 496.17 93.7769 498.611 98.5694C508.566 118.11 514.874 138.391 517.16 160.106C518.326 171.187 520.7 184.22 516.214 194.875C510.01 209.609 490.945 183.696 484.5 180.473"
              stroke-linecap="round"
            />
          </svg>
        </div>
      )}
      <div className="mt-6 grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-3">
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
