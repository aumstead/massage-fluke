import styles from "./Footer.module.css";
import PhoneSvg from "./icons/PhoneSvg";
import MailSvg from "./icons/MailSvg";
import WechatSvg from "./icons/WechatSvg";
import LocationMarkerSvg from "./icons/LocationMarkerSvg";
import Link from "next/link";

const Footer = props => {
  return (
    <footer className={styles.container} style={{marginTop: props.marginTop}}>
      <div className={styles.grid}>
        <div className={styles.contactContainer}>
          <h2 className={styles.heading}>Contact</h2>
          <div className={styles.phoneContainer}>
            <PhoneSvg
              height={"2.5rem"}
              width={"2.5rem"}
              fill={"var(--color-light-black)"}
            />
            <p className={styles.phoneNumber}>156-8931-7645</p>
          </div>
          <div className={styles.emailContainer}>
            <MailSvg
              height={"2.5rem"}
              width={"2.5rem"}
              fill={"var(--color-light-black)"}
            />
            <a
              className={styles.email}
              href="mailto:massagefluke@yahoo.com?Subject=Hello%20Massage%20Fluke!"
              target="_top"
            >
              massagefluke@yahoo.com
            </a>
          </div>
          <div className={styles.wechatContainer}>
            <WechatSvg
              height={"2.5rem"}
              width={"2.5rem"}
              fill={"var(--color-light-black)"}
            />
            <p className={styles.wechatNumber}>19200384243</p>
          </div>
          <div className={styles.addressContainer}>
            <LocationMarkerSvg
              height={"2.5rem"}
              width={"2.5rem"}
              fill={"var(--color-light-black)"}
            />
            <p className={styles.address}>
              87/1 2456 Heping Rd
              <br />
              Yuzhong District, Jie Fang Bei
              <br />
              Chongqing, China 076003
            </p>
          </div>
        </div>

        <div className={styles.quickLinksContainer}>
          <h2 className={styles.heading}>Quick Links</h2>
          <nav>
            <ul className={styles.nav__ul}>
              <li className={styles.nav__li}>
                <Link href="/">
                  <a className={styles.nav__a}>Home</a>
                </Link>
              </li>
              <li className={styles.nav__li}>
                <Link href="/">
                  <a className={styles.nav__a}>Treatments</a>
                </Link>
              </li>
              <li className={styles.nav__li}>
                <Link href="/">
                  <a className={styles.nav__a}>Meditation</a>
                </Link>
              </li>
              <li className={styles.nav__li}>
                <Link href="/">
                  <a className={styles.nav__a}>Courses</a>
                </Link>
              </li>
              <li className={styles.nav__li}>
                <Link href="/blog">
                  <a className={styles.nav__a}>Community</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <img className={styles.logo} src="/images/massagefluke.png" alt="logo" />

      <div className={styles.bottomContainer}>
        <div className={styles.bottomContent}>
          <p className={styles.bottomCopyright}>
            &copy; 2020 Massage Fluke. All rights reserved.
          </p>
          <p className={styles.bottomAttribution}>
            Icons made by Freepik from www.flaticon.com.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
