import styles from "./MeditationPhotoFiller.module.css";

const MeditationPhotoFiller = () => {
  return (
    <section className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.relieveContent}>
          <h2 className={styles.heading}>Breathing Exercises</h2>
          <img
            className={styles.img}
            src="/images/meditate-breath.jpg"
            alt="A woman meditating"
          />
        </div>

        <div className={styles.relaxContent}>
          <h2 className={styles.heading}>Relaxation</h2>
          <img className={styles.img} src="/images/leaf.jpg" alt="A leaf" />
        </div>

        <div className={styles.stressContent}>
          <h2 className={styles.heading}>Meditation</h2>
          <img
            className={styles.img}
            src="/images/meditate-sunset.jpg"
            alt="Meditating woman"
          />
        </div>
      </div>
    </section>
  );
};

export default MeditationPhotoFiller;
