"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Banner() {
  return (
    <>
      <div className="relative h-[400px] w-full">
        <Image
          className="object-cover object-center"
          fill
          src="/cat.JPG"
          alt=""
        />
        <motion.div
          className="relative z-10 text-8xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white"
          animate={{
            color: "rgba(255,255,255,0)",
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ duration: 4 }}
        >
          Hello World!
        </motion.div>
      </div>
      <h2 className="flex items-center max-w-7xl mx-auto mt-10 px-5 text-3xl font-bold">
        <span>LATEST POSTS 🌝</span>
        <Link href="/posts" className="ml-4">
          <IconButton icon={<ArrowForwardIcon />} aria-label="more" />
        </Link>
      </h2>
    </>
  );
}
