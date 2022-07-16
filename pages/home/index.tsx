import type { NextPage } from 'next'
import { Banner } from 'components'

import styles from './index.module.scss'

const Home: NextPage = () => {
  return (
    <main>
      <Banner />
    </main>
  )
}

export default Home
