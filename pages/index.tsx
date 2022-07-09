import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import { Button, Container } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container className={styles.container}>
      <Button variant="contained">212</Button>
    </Container>
  );
};

export default Home;
