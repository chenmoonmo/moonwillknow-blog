"use client";
import { Skeleton } from "@chakra-ui/react";
import Banner from "./banner";

export default function Loading() {
  return (
    <main>
      <Banner />
      <div className="max-w-7xl mx-auto mt-10 px-5 grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-3">
        <Skeleton height={180} />
        <Skeleton height={180} />
        <Skeleton height={180} />
        <Skeleton height={180} />
        <Skeleton height={180} />
        <Skeleton height={180} />
      </div>
    </main>
  );
}
