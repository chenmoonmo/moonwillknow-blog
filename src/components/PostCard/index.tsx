import { FC, ReactElement, useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { defaultMapImageUrl } from 'react-notion-x';
import dayjs from 'dayjs';

import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Tag, TagLabel } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
dayjs.extend(localizedFormat);

interface IProps {
  // TODO:
  data: any;
}
const transition = {
  duration: 0.2,
  type: 'tween',
};

const variants: Variants = {
  show: {
    scale: 1.1,
    opacity: 0,
    transition,
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
};

const PostCard: FC<IProps> = ({ data }): ReactElement => {
  return (
    <Link href={`/posts/${data.id}`}>
      <motion.div
        className={styles.container}
        layout
        variants={variants}
        exit='exit'
        animate='animate'
        initial='show'
      >
        {data?.cover && (
          <motion.div className={styles.cover} layoutId={`cover-${data.id}`}>
            <Image src={data.cover} alt='' layout='fill' objectFit='cover' />
          </motion.div>
        )}
        <motion.h1 layoutId={`title-${data.id}`}>{data.title}</motion.h1>
        <motion.div layoutId={`time-${data.id}`}>
          <time>{dayjs(data?.date?.start_date).format('LL')}</time>
        </motion.div>
        <motion.div className={styles.tags} layoutId={`tags-${data.id}`}>
          {data?.tags?.map((item: string) => (
            <Tag key={item} size='sm' colorScheme='twitter'>
              <TagLabel>{item}</TagLabel>
            </Tag>
          ))}
        </motion.div>
        <motion.div className={styles.postInfo} layoutId={`summary-${data.id}`}>
          {data.summary}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default PostCard;
