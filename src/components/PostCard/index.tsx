import { FC, ReactElement, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { defaultMapImageUrl } from "react-notion-x";
import dayjs from "dayjs";

import localizedFormat from "dayjs/plugin/localizedFormat";
import { Tag, TagLabel } from "@chakra-ui/react";
dayjs.extend(localizedFormat);

interface IProps {
  // TODO:
  data: any;
  onClick?: (id: string) => void;
}

const PostCard: FC<IProps> = ({ data, onClick }): ReactElement => {
  const cover = data?.cover ? defaultMapImageUrl(data?.cover, data) : "";

  const handleClick = () => {
    onClick?.(data.id);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      {cover && (
        <div className={styles.cover}>
          <Image src={cover} alt="" layout="fill" objectFit="cover" />
        </div>
      )}
      <h1>{data.title}</h1>
      <time>{dayjs(data?.date?.start_date).format("LL")}</time>
      <div className={styles.tags}>
        {data?.tags?.map((item: string) => (
          <Tag key={item} size="sm" colorScheme="twitter">
            <TagLabel>{item}</TagLabel>
          </Tag>
        ))}
      </div>
      <div className={styles.postInfo}>{data.summary}</div>
    </div>
  );
};

export default PostCard;
