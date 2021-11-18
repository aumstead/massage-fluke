import styles from "./MeditationCTA.module.css";

const MeditationCTA = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>
        Attend a meditation workshop or book an individual session.
      </h2>
      <button className={styles.cta}>
        Choose a workshop or book a session
      </button>
    </section>
  );
};

export default MeditationCTA;
