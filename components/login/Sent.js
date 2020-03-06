import styles from './Sent.module.css'
import Link from 'next/link'

const Sent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.space}></div>
      <p className={styles.text}>Please check your email.</p>
      <Link href='/signin'><a className={styles.return}>Back to sign in</a></Link>
    </div>
  )
}

export default Sent;