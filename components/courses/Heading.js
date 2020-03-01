import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.col__list}>
          <h2 className={styles.h2}>Courses Offered</h2>
          <h6 className={styles.h6}>Read more:</h6>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a className={styles.a} href="#section__thaiFoot">
                Thai Foot Massage
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#section__thaiSpa">
                Thai Spa Oil Massage
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#section__reiki">
                Reiki 1, 2, Masters
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#section__mongolian">
                Mongolian Massage
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#section__acupressure">
                Acupressure Face
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.col__quotes}>
          <p className={styles.text}>
            Learn from Karen, who has over a decade of teaching experience and
            studied herself in places like Thailand and Japan!
          </p>
          <p className={styles.quote}>
            Karen is a fantastic teacher and clearly puts in the time and effort to be the best teacher she can be. Her
            experience living and studying in Asia so unique and fascinating!
            <br />
            <br />— Paul Cassidy
          </p>
        </div>
        <div className={styles.col__image}>
          <img
            className={styles.image}
            src="/images/courses.jpg"
            alt="Woman getting massaged by two people"
          />
        </div>
      </div>
    </section>
  );
};

export default Heading;
