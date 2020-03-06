import Link from "next/link";
import styles from "./Consultation.module.css";

const Consultation = () => {
  return (
    <section className={styles.container}>
      <div className={styles.flexBox}>
        <div className={styles.flexItem__left}>
          <h2 className={styles.ready}>Ready to book an appointment?</h2>
          <h3 className={styles.call}>Call or visit for a free consultation!</h3>
          
        </div>
        <div className={styles.flexItem__right}>
        <Link href="/">
            <a className={styles.button}>Book appointment!</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
