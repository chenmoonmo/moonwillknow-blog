"use client";

import { Skeleton } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Skeleton minH={6} className="mt-10 flex flex-wrap gap-4 items-center" />
      <div className="mt-5 grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-3">
        <Skeleton height={180} />
        <Skeleton height={180} />
        <Skeleton height={180} />
        <Skeleton height={180} />
        <Skeleton height={180} />
        <Skeleton height={180} />
      </div>
    </>
  );
}
