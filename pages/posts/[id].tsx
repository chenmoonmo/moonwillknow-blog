import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import styles from "./index.module.scss";
interface IProps {
  data: any;
}

const PostDetail: NextPage<IProps> = ({ data }): ReactElement => {
  const router = useRouter();
  const { id } = router.query;
  console.log(data);
  return (
    <main className={styles.postContainer}>
      <div>{id}</div>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: data?.content?.html }}
      ></div>
    </main>
  );
};

export async function getServerSideProps() {
  const {
    data: { data: list },
  } = await axios.get("http://localhost:3000/notion/post-list");

  return {
    props: {
      data: list?.[0],
    },
  };
}

export default PostDetail;
