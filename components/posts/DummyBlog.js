import styles from './DummyBlog.module.css'

const DummyBlog = () => {
  return (
    <div className={styles.dummy__container}>
      <div className={styles.dummy__image}></div>
      <div className={styles.dummy__title}></div>
      <div className={styles.dummy__date}></div>
      <div className={styles.dummy__author}></div>
      <div className={styles.dummy__body}></div>
    </div>
  )
}

export default DummyBlog;