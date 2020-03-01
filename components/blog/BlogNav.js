import GroupSvg from '../icons/GroupSvg'
import LoginSvg from '../icons/LoginSvg'
import WritingSvg from '../icons/WritingSvg'
import Link from 'next/link'

import styles from './BlogNav.module.css'

const BlogNav = () => {
  return (
    <section className={styles.container}>
      <div className={styles.iconsContainer}>
        <div className={styles.flexItem__account}>
          <h3 className={styles.h3}>Create an account.</h3>
          <LoginSvg width="50" height="50" fill="#f75f00" />
        </div>

        <div className={styles.flexItem__write}>
          <h3 className={styles.h3}>Write a blog post.</h3>
          <WritingSvg width="50" height="50" fill="#f75f00" />
        </div>

        <div className={styles.flexItem__share}>
          <h3 className={styles.h3}>Share your story.</h3>
          <GroupSvg width="50" height="50" fill="#f75f00" />
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        <Link href="/blog"><a className={`${styles.btn__login}`}>Sign in</a></Link>
        <Link href="/blog"><a className={`${styles.btn} ${styles.btn__account}`}>Make an account</a></Link>
      </div>
    </section>
  )
}

export default BlogNav;