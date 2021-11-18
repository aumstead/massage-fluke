import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const router = useRouter();
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
              <Link href="/meditation">
                <a className={styles.nav__a}>Meditation</a>
              </Link>
            </li>
            <li>
              <Link href="/courses">
                <a className={styles.nav__a}>Learn to Give Massage</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/blog">
                <a className={styles.nav__a}>Community</a>
              </Link>
            </li> */}
          </ul>
        </nav>
        <div className={styles.right}>
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
                  <Link href="/mediation">
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
}

export default Layout;
