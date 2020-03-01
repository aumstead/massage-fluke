import Link from "next/link";
import styles from "./Pets.module.css";

const Pets = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 className={styles.h2}>Bowen can treat pets too!</h2>
          <p className={styles.text}>
            Bowen for animals works on a similar process as Bowen for people and
            is currently used on dogs, cats and horses. Bowen Technique for
            animals is never forced on the animal – this will only serve to make
            them less receptive and will be counter-productive to the outcome.
            <br />
            <br />
            After getting accustomed to the Bowen Technique, it is common for
            pets to come over and position themselves to indicate where they’d
            like the work done.
          </p>

          <Link href="/treatments#pets">
            <button className={styles.button}>
              <a className={styles.a}>Read more about Bowen for your pets!</a>
            </button>
          </Link>
        </div>

        <div className={styles.right}>
          <img
            className={styles.image__1}
            src="/images/dog1.jpg"
            alt="Dog sleeping in sun"
          />
          <img
            className={styles.image__2}
            src="/images/dog2.jpg"
            alt="Dog with pink sunglasses"
          />
          <img
            className={styles.image__3}
            src="/images/dog4.jpg"
            alt="Woman sitting with dog"
          />
        </div>
      </div>
    </section>
  );
};

export default Pets;
