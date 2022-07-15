import type { NextPage } from 'next'
import Image from 'next/image'

import styles from '@/styles/Home.module.scss'

import { Button, Container } from '@mui/material'
import { Header } from 'components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main></main>
    </div>
  )
}

export default Home
