import styles from "./MeditationSummaries.module.css";

const MeditationSummaries = () => {
  return (
    <section className={styles.container}>
      <div>
        <img
          className={styles.image}
          src="/images/meditate.jpg"
          alt="Girl meditating"
        />
        <div className={styles.bowenContent}>
          <h2 className={styles.h2}>About Meditation</h2>
          <p className={styles.text}>
            Bowen is a gentle, restorative treatment which is able to help with
            specific conditions and alignments within the body. It uses the
            thumbs and forefingers to create a rolling-type movement over
            specific junctions of the body in order to stimulate nerve pathways
            that connect the different nervous systems of the body.
            <br />
            <br />
            Between each set of moves, the therapist leaves the room to allow
            the brain and body to respond. These breaks increase the
            effectiveness of each subsequent set of moves. The brain and body
            are constantly communicating with each other within every second of
            our life, reacting to changes, new situations and environment.
            <br />
            <br />
            During the treatment, the client lays down on a couch and most
            response by going into a deep and rapid relaxation. Reactions after
            the treatment may vary, after some will experience a sensation of
            extreme tiredness, stiffness or the existing pain may have moved
            position, all signs that the body is beginning the repair process.
            Signs of improvement usually appear after two to three sessions and
            that is why a course of three is always recommended.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeditationSummaries;
