import styles from "./PhotoFiller.module.css";

const PhotoFiller = () => {
  return (
    <section className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.relieveContent}>
          <h2 className={styles.heading}>Relieve Pain</h2>
          <img
            className={styles.img}
            src="/images/back1.jpg"
            alt="Bowen technique"
          />
        </div>

        <div className={styles.relaxContent}>
          <h2 className={styles.heading}>Relax the Body</h2>
          <img
            className={styles.img}
            src="/images/body-relaxation.jpg"
            alt="Towels and oils for a massage"
          />
        </div>

        <div className={styles.stressContent}>
          <h2 className={styles.heading}>Reduce Stress</h2>
          <img
            className={styles.img}
            src="/images/acupressure.jpg"
            alt="Massage"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoFiller;
