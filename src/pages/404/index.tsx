import { NextPage } from 'next'
import styles from './index.module.scss'

const NotFound: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textLayer}>
        <div>
          404NotFound.<span>404NotFound.</span>
          404NotFound.404NotFound.404NotFound.
        </div>
        <div>404NotFound.404NotFound.404NotFound.404NotFound.404NotFound.</div>
        <div>
          404NotFound.404NotFound<span>404NotFound.</span>404NotFound.
        </div>
        <div>404NotFound.404NotFound.404NotFound.404NotFound.404NotFound.</div>
        <div>404NotFound.404NotFound.404NotFound.404NotFound.404NotFound.</div>
      </div>
    </div>
  )
}

export default NotFound
