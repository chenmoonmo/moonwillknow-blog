import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './index.module.scss'
import { FC, ReactElement } from 'react'

const Banner: FC = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/cat.JPG"
        alt=""
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <motion.div
        className={styles.text}
        animate={{
          color: 'rgba(255,255,255,0)',
          transitionEnd: {
            display: 'none',
          },
        }}
        transition={{ duration: 4 }}
      >
        Hello World!
      </motion.div>
    </div>
  )
}
export default Banner
