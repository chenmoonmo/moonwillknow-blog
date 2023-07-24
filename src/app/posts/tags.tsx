"use client";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Tag, TagLabel, Tooltip } from "@chakra-ui/react";
import React, { MouseEvent } from "react";

type TagsProps = {
  tags: string[];
  currentTags?: string[];
  onTagsChange?: (tags: string[]) => void;
};

export const Tags: React.FC<TagsProps> = ({
  tags,
  currentTags = [],
  onTagsChange,
}) => {
  const handlerFilter = (e: MouseEvent<HTMLSpanElement>, tag: string) => {
    e.preventDefault();

    const isTagIncluded = currentTags?.includes(tag);

    let newTags = [];

    if (e.metaKey || e.ctrlKey) {
      newTags = [tag];
    } else {
      newTags = isTagIncluded
        ? currentTags?.filter((j) => j !== tag)
        : [...currentTags, tag];
    }

    onTagsChange?.(newTags);
  };

  return (
    <div className="mt-10 flex flex-wrap gap-4 items-center">
      {tags?.map((tag) => (
        <Tag
          className="cursor-pointer select-none"
          key={tag}
          size="sm"
          colorScheme={currentTags?.includes(tag) ? "messenger" : "gray"}
          onClick={(e) => handlerFilter?.(e, tag)}
        >
          <TagLabel>{tag}</TagLabel>
        </Tag>
      ))}
      {tags.length > 0 && (
        <Tooltip label="⌘ + Click To Filter Only" placement="top">
          <QuestionOutlineIcon cursor="pointer" />
        </Tooltip>
      )}
    </div>
  );
};
