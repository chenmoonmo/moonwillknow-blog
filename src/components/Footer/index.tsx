import dayjs from 'dayjs'
import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

const Footer: FC = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      © 2022 - {dayjs().year()} chenmoonmo. All rights reserved.
    </footer>
  )
}

export default Footer
