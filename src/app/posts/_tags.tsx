"use client";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Tag, TagLabel, Tooltip } from "@chakra-ui/react";

export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="mt-10 flex flex-wrap gap-4 items-center">
      {tags?.map((tag) => (
        <Tag
          className="cursor-pointer select-none"
          key={tag}
          size="sm"
          // colorScheme={currentTags?.includes(item) ? "messenger" : "gray"}
          // onClick={(e) => handleFilte(e, item)}
        >
          <TagLabel>{tag}</TagLabel>
        </Tag>
      ))}
      {tags.length > 0 && (
        <Tooltip label="⌘+Click To Reverse" placement="top">
          <QuestionOutlineIcon cursor="pointer" />
        </Tooltip>
      )}
    </div>
  );
};
