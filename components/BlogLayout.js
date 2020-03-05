import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "../components/auth/useAuth";
import firebase from "../firebase/firebase";

import styles from "./Layout.module.css";

const BlogLayout = ({ children }) => {
  const router = useRouter();

  const user = useAuth();

  return (
    <div className={styles.layoutContainer}>
      <header className={styles.headerDesktop}>
        <nav>
          <ul className={styles.nav__ul}>
            <li>
              <Link href="/">
                <a className={styles.nav__a}>
                  <img
                    className={styles.logoImage}
                    src="/images/massagefluke.png"
                    alt="logo"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.nav__a}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/treatments">
                <a className={styles.nav__a}>Treatments</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.nav__a}>Meditation</a>
              </Link>
            </li>
            <li>
              <Link href="/courses">
                <a className={styles.nav__a}>Learn to Give Massage</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className={styles.nav__a}>Community</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.right}>
          <Link href="/blog/create">
            <a className={styles.right__a}>Contribute a post</a>
          </Link>
          {!user ? (
            <Link href="/signin">
              <a className={styles.right__a}>Sign in</a>
            </Link>
          ) : (
            <button
              onClick={() => firebase.logout()}
              className={`${styles.right__a} ${styles.logoutBtn}`}
            >
              Sign out
            </button>
          )}
          <Link href="">
            <button className={styles.button}>
              <a className={styles.button__a}>Book now &#8594;</a>
            </button>
          </Link>
        </div>
      </header>

      <header className={styles.headerMobile}>
        <nav className={styles.mobileNav}>
          <input className={styles.toggler} type="checkbox" />
          <div className={styles.hamburger}>
            <div></div>
          </div>
          <div className={styles.sideDrawer}>
            <div className={styles.sideDrawer__content}>
              <Link href="/">
                <a>
                  <img
                    className={styles.mobileLogo}
                    src="/images/massagefluke.png"
                    alt="logo"
                  />
                </a>
              </Link>
              <Link href="">
                <button className={styles.mobileBtn}>
                  <a className={styles.mobileBtn__a}>Book now &#8594;</a>
                </button>
              </Link>
              {!user ? (
                <Link href="/signin">
                  <a className={styles.mobileLogin}>Sign in</a>
                </Link>
              ) : (
                <button
                  onClick={() => firebase.logout()}
                  className={`${styles.mobileLogin}`}
                >
                  Sign out
                </button>
              )}

              <Link href="/blog/create">
                <a className={styles.mobileContribute}>Contribute a post</a>
              </Link>

              <ul className={styles.mobileNav__ul}>
                <li>
                  <Link href="/">
                    <a className={styles.mobileNav__a}>Home</a>
                  </Link>
                </li>
                <hr className={styles.mobileNav__hr}></hr>
                <li>
                  <Link href="/treatments">
                    <a className={styles.mobileNav__a}>Treatments</a>
                  </Link>
                </li>
                <hr className={styles.mobileNav__hr}></hr>
                <li>
                  <Link href="">
                    <a className={styles.mobileNav__a}>Meditation</a>
                  </Link>
                </li>
                <hr className={styles.mobileNav__hr}></hr>
                <li>
                  <Link href="/courses">
                    <a className={styles.mobileNav__a}>Learn to Give Massage</a>
                  </Link>
                </li>
                <hr className={styles.mobileNav__hr}></hr>
                <li>
                  <Link href="/blog">
                    <a className={styles.mobileNav__a}>Community</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {children}

      <footer></footer>
    </div>
  );
};

export default BlogLayout;
