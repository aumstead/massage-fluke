import Link from "next/link";

import styles from "./BowenFeature.module.css";

function BowenFeature() {
  return (
    <section className={styles.container}>
      <img
        className={styles.image}
        src="/images/hero.jpg"
        alt="Hands on person's back using the bowen technique"
      />
      <div className={styles.content}>
        <h4 className={styles.h4}>Featured Treatment:</h4>
        <h3 className={styles.h3}>The Bowen Technqiue</h3>
        <p className={styles.text}>
          The Bowen Technique is a very gentle, restorative treatment to help
          with specific conditions and alignments within the body.<br></br>
          <br></br>
          It uses the thumbs and forefingers to create a rolling-type movement
          over specific junctions of the body to stimulate nerve pathways
          connected to different nervous systems of the body.
        </p>
        <Link href="/treatments#bowen">
          <button className={styles.button}>
            <a className={styles.button__a}>List of conditions Bowen treats</a>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default BowenFeature;
