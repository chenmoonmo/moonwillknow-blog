import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import styles from "./index.module.scss";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { request } from "utils";

import Prism from "prismjs";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-shell-session";

import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";

interface IProps {
  data: any;
}

const PostDetail: NextPage<IProps> = ({ data }): ReactElement => {
  const router = useRouter();
  const { id } = router.query;
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [isMounted]);

  return (
    <main className={styles.postContainer}>
      <div className={styles.cover}>
        <h1>{data?.content?.title}</h1>
      </div>
      <ReactMarkdown className="markdown-body" rehypePlugins={[rehypeRaw]}>
        {isMounted ? data?.content?.html : null}
      </ReactMarkdown>
    </main>
  );
};

export async function getServerSideProps() {
  let list;

  try {
    ({ data: list } = await request.get("/notion/post-list"));
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      data: list?.[1],
    },
  };
}

export default PostDetail;
