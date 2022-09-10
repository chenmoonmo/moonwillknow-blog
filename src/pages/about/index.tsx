import { NextPage } from 'next';
import { motion } from 'framer-motion';

import styles from './index.module.scss';

const About: NextPage = () => {
  return (
    <main className={styles.aboutContainer}>
      <h1>hello world</h1>
      <div className={styles.background} ></div>
    </main>
  );
};

export default About;
