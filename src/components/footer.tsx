import dayjs from 'dayjs'
import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="flex items-center justify-center mx-auto text-center h-16 text-sm font-semibold font-mono">
      © 2022 - {dayjs().year()} chenmoonmo. All rights reserved.
    </footer>
  )
}
