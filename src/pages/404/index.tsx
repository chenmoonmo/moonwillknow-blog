import { NextPage } from "next";
import styles from "./index.module.scss";

const NotFound: NextPage = () => {
  const emoji = ["🌑", "🌒", "🌓", "🌖", "🌕", "🌔", "🌗", "🌘"];
  const words = new Array(60).fill("");
  return (
    <div className={styles.container}>
      <div className={styles.textLayer}>
        {words.map((item, index) => {
          return (
            <span key={index}>
              4<span className={styles.text}>{emoji[(index % emoji.length) - 1]}</span>4N<span className={styles.text}>{emoji[((2 * index) % emoji.length) - 1]}</span>tF<span className={styles.text}>{emoji[((3 * index) % emoji.length) - 1]}</span>und.
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default NotFound;
