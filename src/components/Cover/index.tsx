import { motion } from 'framer-motion';
import { FC } from 'react';

const Cover: FC = () => {
  return (
    <motion.div className={styles.cover} layoutId={`cover-${data.id}`}>
      <Image src={Cover} alt='' layout='fill' objectFit='cover' />
    </motion.div>
  );
};

export default Cover;
