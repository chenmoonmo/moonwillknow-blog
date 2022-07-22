import { NextPage } from 'next'
import styles from './index.module.scss'

const NotFound: NextPage = () => {
  const emoji = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘']
  const words = new Array(60).fill('')
  return (
    <div className={styles.container}>
      <div className={styles.textLayer}>
        {words.map((item, index) => {
          const count = index * 3
          return (
            <span key={index}>
              4<span className={styles.text}>{emoji[(1 + count) % 8]}</span>
              4N
              <span className={styles.text}>{emoji[(2 + count) % 8]}</span>
              tF
              <span className={styles.text}>{emoji[(3 + count) % 8]}</span>
              und.
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default NotFound
