"use client";

import { Skeleton } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Skeleton h={160} className="rounded-md overflow-hidden" />
      <div className="flex flex-col gap-2 max-w-3xl m-auto mt-10">
        <Skeleton h={12} />
        <Skeleton h={4} />
        <Skeleton h={4} />
        <Skeleton h={4} />
        <Skeleton h={30} />
        <Skeleton h={8} />
        <Skeleton h={4} />
        <Skeleton h={4} />
        <Skeleton h={8} />
        <Skeleton h={8} />
        <Skeleton h={8} />
        <Skeleton h={8} />
        <Skeleton h={8} />
        <Skeleton h={8} />
        <Skeleton h={4} />
        <Skeleton h={4} />
        <Skeleton h={8} />
        <Skeleton h={8} />
      </div>
    </>
  );
}
