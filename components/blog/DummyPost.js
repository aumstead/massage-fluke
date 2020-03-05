import styles from './DummyPost.module.css'

const DummyPost = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}></h3>
      <p className={styles.p}></p>
      <p className={styles.p}></p>
      <p className={styles.excerpt}></p>
      <p className={styles.excerpt}></p>
      <p className={styles.p}></p>
    </div>
  )
}

export default DummyPost;