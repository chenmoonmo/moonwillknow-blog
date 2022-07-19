import type { NextPage } from "next";
import { Banner } from "components";

import styles from "./index.module.scss";
import axios from "axios";

interface IProps {
  list: any;
}

const Home: NextPage<IProps> = ({ list }) => {
  console.log({ list });
  return (
    <main>
      <Banner />
    </main>
  );
};

export async function getServerSideProps() {
  const {
    data: { data: list },
  } = await axios.get("http://localhost:3000/notion/post-list");
  return {
    props: {
      list,
    },
  };
}

export default Home;
