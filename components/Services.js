import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Services.module.css";

const Services = ({ showHeading, showSideHeading, marginBottom }) => {
  const router = useRouter();

  return (
    <section
      className={styles.container}
      style={{ marginBottom: marginBottom }}
    >
      {showHeading && <h2 className={styles.heading}>All Treatments</h2>}
      {showHeading && <hr className={styles.hr}></hr>}
      {showSideHeading && (
        <h2 className={styles.sideHeading}>Treatments List</h2>
      )}
      <div className={styles.grid}>
        <Link href={router.pathname === "/" ? "/treatments#bowen" : "#bowen"}>
          <a>
            <div className={styles.card}>
              <div className={`${styles.cardBack} ${styles.bowen}`}></div>
              <h3 className={styles.cardTitle}>Bowen Technique</h3>
            </div>
          </a>
        </Link>

        <Link
          href={router.pathname === "/" ? "/treatments#thaiOil" : "#thaiOil"}
        >
          <a>
            <div className={styles.card}>
              <div className={`${styles.cardBack} ${styles.thaiSpa}`}></div>
              <h3 className={styles.cardTitle}>Thai spa oil massage</h3>
            </div>
          </a>
        </Link>

        <Link
          href={router.pathname === "/" ? "/treatments#thaiFoot" : "#thaiFoot"}
        >
          <a>
            <div className={styles.card}>
              <div className={`${styles.cardBack} ${styles.thaiFoot}`}></div>
              <h3 className={styles.cardTitle}>Thai foot massage</h3>
            </div>
          </a>
        </Link>

        <Link href={router.pathname === "/" ? "/treatments#reiki" : "#reiki"}>
          <a>
            <div className={styles.card}>
              <div className={`${styles.cardBack} ${styles.reiki}`}></div>
              <h3 className={styles.cardTitle}>Reiki</h3>
            </div>
          </a>
        </Link>

        <Link
          href={
            router.pathname === "/" ? "/treatments#mongolian" : "#mongolian"
          }
        >
          <a>
            <div className={styles.card}>
              <div className={`${styles.cardBack} ${styles.mongolian}`}></div>
              <h3 className={styles.cardTitle}>Mongolian Sky Energy</h3>
            </div>
          </a>
        </Link>

        <Link
          href={
            router.pathname === "/" ? "/treatments#acupressure" : "#acupressure"
          }
        >
          <a>
            <div className={styles.card}>
              <div className={`${styles.cardBack} ${styles.acupuncture}`}></div>
              <h3 className={styles.cardTitle}>Acupressure Face Massage</h3>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Services;
