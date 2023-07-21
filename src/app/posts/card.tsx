"use client";
import { Variants, motion } from "framer-motion";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { Tag, TagLabel } from "@chakra-ui/react";

const MotionLink = motion(Link);

type PostCardProps = {
  id: string;
  title: string;
  description: string;
  image: string | undefined | null;
  date: number;
  tags: string[];
};

const transition = {
  duration: 0.2,
  type: "tween",
};

const variants: Variants = {
  show: {
    scale: 1.1,
    opacity: 0,
    transition,
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
};

export const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  description,
  image,
  date,
  tags,
}) => {
  return (
    <MotionLink
      className="block w-full pb-5 cursor-pointer"
      href={`/posts/${id}`}
      layout
      variants={variants}
      exit="exit"
      animate="animate"
      initial="show"
    >
      {image && (
        <motion.div
          className="relative h-40 w-full rounded-md overflow-hidden md:h-28"
          layoutId={`cover-${id}`}
        >
          <Image className="object-cover object-center" fill src={image} alt="" />
        </motion.div>
      )}
      <motion.h1
        className="mt-[6px] text-xl font-bold dark:text-gray-300 text-slate-800"
        layoutId={`title-${id}`}
      >
        {title}
      </motion.h1>
      <motion.time
        layoutId={`time-${id}`}
        className="mt-[6px] text-sm font-bold text-green-600"
      >
        {dayjs(date).format("YYYY-MM-DD")}
      </motion.time>
      <motion.div className="mt-[6px] flex gap-2" layoutId={`tags-${id}`}>
        {tags?.map((tag) => (
          <Tag key={tag} size="sm" colorScheme="twitter">
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </motion.div>
      <motion.p
        className="mt-[6px] text-xs font-semibold text-gray-400"
        layoutId={`summary-${id}`}
      >
        {description}
      </motion.p>
    </MotionLink>
  );
};
