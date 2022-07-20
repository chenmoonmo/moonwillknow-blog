import { useEffect } from "react";
import { FC, ReactElement, useState } from "react";
import styles from "./index.module.scss";
// @ts-ignore: Unreachable code error
import { convert } from "html-to-text";

interface IProps {
  // TODO:
  data: any;
  onClick?: (id: string) => void;
}

const PostCard: FC<IProps> = ({ data, onClick }): ReactElement => {
  const handleClick = () => {
    onClick?.(data.id);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <h1>{data.title}</h1>
      <div className={styles.postInfo}>{data.summary}</div>
    </div>
  );
};

export default PostCard;
