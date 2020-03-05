import ThaiIcon from "../icons/ThaiIcon";
import Link from "next/link";
import styles from "./Thai.module.css";
import TowelsIcon from "../icons/TowelsIcon";

function Thai() {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.backgroundRight}>
          <div className={styles.contentRight}>
            <div className={styles.thaiIconPositioner}>
              <ThaiIcon
                fill="var(--color-background)"
                height="10rem"
                width="10rem"
                opacity=".1"
              />
            </div>
            <p className={styles.textRight}>
              Massage therapy for rest and relaxation
            </p>
            <Link href="/treatments#thaiOil">
              <button className={styles.cta}><a className={styles.cta__a}>Read more</a></button>
            </Link>
          </div>
        </div>
        <div className={styles.backgroundLeft}>
          <div className={styles.contentLeft}>
            <h2 className={styles.title}>Thai foot and spa oil massage.</h2>
            <p className={styles.text}>
              Thai massage is wonderfully relaxing and beneficial in relieving
              aching muscles from the body. The massage strokes are long,
              rhythmical, and induce the body into a state of deep relaxation.
            </p>
          </div>
        </div>
        <img
          className={styles.image}
          src="/images/thai-spa.jpg"
          alt="Thai spa massage"
        />
      </div>
    </section>
  );
}

export default Thai;
