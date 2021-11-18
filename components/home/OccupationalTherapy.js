import styles from "./OccupationalTherapy.module.css";

function OccupationalTherapy() {
  return (
    <div className={styles.container}>
      <div className={styles.flexbox}>
        <div className={styles.left}>
          <h2 className={styles.h2}>Occupational Therapy</h2>
          <p className={styles.text}>
            Occupational Therapy helps with certain barriers that affect a
            person's emotional, social, and physical needs. These may include,
            mental health, physical rehabilitation, pediatrics, driving and
            community ability, environmental modifications, gerontology, and
            feeding/swallowing.
            <br />
            <br />
            Through a series of assessments and activities, occupational therapy
            can enable people to develop, recover, improve, as well as maintain
            the skills needed for daily living and working.
          </p>
        </div>
        <div className={styles.right}>
          <img className={styles.image} src="/images/ot-shrink.jpg" />
        </div>
      </div>
    </div>
  );
}

export default OccupationalTherapy;
