import styles from "./TreatmentSummaries.module.css";

const TreatmentSummaries = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Descriptions</h2>
      <div className={styles.bowen}>
        <img
          className={styles.image}
          src="/images/back.jpg"
          alt="Bowen technique"
        />
        <div className={styles.bowenContent}>
          <a className={styles.anchor} id="bowen"></a>
          <h2 className={styles.h2}>The Bowen Technique</h2>
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
          <h3 className={styles.subheading}>
            Conditions the body may respond to by receiving Bowen
          </h3>
          <div className={styles.bowenConditions}>
            <div className={styles.sculo__1}>
              <h4 className={styles.h4}>Sculo-Skeletal Pain</h4>
              <ul className={styles.ul}>
                <li>Back Pain - Chronic and Acute</li>
                <li>Frozen Shoulder and Pain</li>
                <li>Arthritic Pain</li>
                <li>Sporting Injuries</li>
                <li>Carpal Tunnel Syndrome</li>
                <li>Pelvic problems</li>
                <li>Knee and hip restrictions</li>
                <li>Headaches</li>
                <li>Migraines</li>
                <li>Shin Splints</li>
                <li>Postural problems</li>
                <li>Sciatica</li>
                <li>RSI / OSS</li>
              </ul>
            </div>

            <div className={styles.sculo__2}>
              <h4>&nbsp;</h4>
              <ul className={styles.ul}>
                <li>Hernia</li>
                <li>Heel Pain</li>
                <li>Hammer Toes</li>
                <li>Foot and ankle problems</li>
                <li>Polymyalgia</li>
                <li>Fibromyalgia</li>
                <li>Plantar fasciitis</li>
                <li>Leg Length Discrepancies</li>
                <li>Gait Disorders</li>
                <li>Scoliosis</li>
                <li>TMJ Syndrome</li>
                <li>Inflexibility</li>
                <li>Hamstrings</li>
              </ul>
            </div>

            <div className={styles.respiratory}>
              <h4 className={styles.h4}>Respiratory Problems</h4>
              <ul className={styles.ul}>
                <li>Asthma</li>
                <li>Bronchitis</li>
                <li>Sinusitis</li>
                <li>Hay Fever</li>
                <li>Allergies</li>
              </ul>
            </div>

            <div className={styles.digestive}>
              <h4 className={styles.h4}>Digestive Disorders</h4>
              <ul className={styles.ul}>
                <li>Constipation</li>
                <li>Colic</li>
                <li>Bowel problems</li>
                <li>Indigestion</li>
                <li>Crohn's Disease</li>
              </ul>
            </div>

            <div className={styles.gyne}>
              <h4 className={styles.h4}>Gynecological Problems</h4>
              <ul className={styles.ul}>
                <li>Infertility</li>
                <li>Mastitis</li>
                <li>Pre Menstrual Syndrome</li>
              </ul>
            </div>

            <div className={styles.also}>
              <h4 className={styles.h4}>Also</h4>
              <ul className={styles.ul}>
                <li>Chronic Fatigue Syndrome</li>
                <li>Hemorrhoids</li>
                <li>Tinnitus</li>
                <li>Balance Problems</li>
                <li>Prostatic Problems</li>
                <li>Earache and Ear infection</li>
                <li>Bed Wetting in Children</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thaiOil}>
        <a className={styles.anchor} id="thaiOil"></a>
        <img
          className={styles.image}
          src="/images/thai-oil.jpg"
          alt="Thai spa oil massage"
        />
        <div className={styles.thaiOilContent}>
          <h2 className={styles.h2}>Thai Spa Oil Massage</h2>
          <p className={styles.text}>
            The traditional Thai Oil massage uses flowing massage movements
            alongside gentle stretching techniques to induce a deep relaxed
            state of mind, improve skin tone and blood circulation and reduce
            stress from the mind. This treatment is not only wonderfully
            relaxing but also beneficial in relieving aching muscles from the
            body without causing pain to the receiver. It is very different from
            other massage therapies because the massage strokes used in Thai Oil
            are long and rhythmical. People often report to have experienced a
            feeling of floating and being massaged with many hands during the
            treatment.
          </p>
        </div>
      </div>

      <div className={styles.thaiFoot}>
        <a className={styles.anchor} id="thaiFoot"></a>
        <img
          className={styles.image}
          src="/images/thai-foot.jpg"
          alt="Thai foot spa"
        />
        <div className={styles.thaiFootContent}>
          <h2 className={styles.h2}>Thai Foot Massage</h2>
          <p className={styles.text}>
            Thai foot massage is very different to Reflexology because it uses a
            special wooden stick with cream to focus on the feet and legs. Both
            massage and stretching techniques are used to stimulate circulation
            and help remove built up toxins in the body, relieve heavy or tired
            legs, induce the body into a state of deep relaxation and assist
            with sleep patterns.
          </p>
        </div>
      </div>

      <div className={styles.reiki}>
        <a className={styles.anchor} id="reiki"></a>
        <img className={styles.image} src="/images/reiki.jpg" alt="Reiki" />
        <div className={styles.reikiContent}>
          <h2 className={styles.h2}>Reiki</h2>
          <p className={styles.text}>
            This is a non invasive form of healing where the therapist channels
            energy and passes it onto the receiver by placing hands over the
            person's energy centres. The concept behind this ancient form of
            healing is to activate the natural healing process of a person's
            body to restore emotional and physical well being.
          </p>
        </div>
      </div>

      <div className={styles.mongolian}>
        <a className={styles.anchor} id="mongolian"></a>
        <img
          className={styles.image}
          src="/images/mongolian.jpg"
          alt="Mongolian Sky Energy"
        />
        <div className={styles.mongolianContent}>
          <h2 className={styles.h2}>Mongolian Sky Energy</h2>
          <p className={styles.text}>
            Mongolian Sky Energy® was developed by Karen Bayley after taking
            training in Mongolia for a therapy called Chingus Massage. Mongolian
            Sky Energy® is an energetically based treatment that uses slow and
            soothing hands on massaging techniques to help re-balance energy
            centres within the body. Its ideology is based upon Mongolia's
            ancient understanding and connection to nature and the elements.
          </p>
        </div>
      </div>

      <div className={styles.acupressure}>
        <a className={styles.anchor} id="acupressure"></a>
        <img
          className={styles.image}
          src="/images/acupressure.jpg"
          alt="Acupressure Face Massage"
        />
        <div className={styles.acupressureContent}>
          <h2 className={styles.h2}>Acupressure Face Massage</h2>
          <p className={styles.text}>
            Acupressure Face Massage Covering the neck, shoulders and upper
            chest area as well as the face, acupressure movements are used to
            stimulate reflex zones around the upper body to encourage fresh
            blood to rise to the surface. This helps to improve skin tone,
            maintains sinus flow, eases tension for the upper body and can
            relieve headaches too. No creams or oils are used during this
            treatment making it an easy and non messy treatment to have anytime
            of the day. It is a more relaxing massage that the Korean Hanjeong
            Massage™ and recommended if you're looking to unwind after a hard
            day at work.
          </p>
        </div>
      </div>

      <div className={styles.pets}>
        <a className={styles.anchor} id="pets"></a>
        <div className={styles.petsGrid}>
          <div className={styles.pets__right}>
            <img
              className={styles.petsImage__1}
              src="/images/cat.jpg"
              alt="Kitten lying on back"
            />
            <img
              className={styles.petsImage__2}
              src="/images/pug.jpg"
              alt="Pug in owner's arms"
            />
            <img
              className={styles.petsImage__3}
              src="/images/dog3.jpg"
              alt="Dog with cone around head"
            />
          </div>
          <div className={styles.pets__left}>
            <h2 className={styles.h2}>Bowen for Animals</h2>
            <p className={styles.text}>
              Bowen for animals works on a similar process as Bowen for people
              and is currently used on dogs, cats and horses. Bowen Technique
              for animals is never forced on the animal – this will only serve
              to make them less receptive and will be counter-productive to the
              outcome. An important part of animal Bowen Technique is
              recognising and respecting when the animal indicates it has
              received what it needs. At the start of a Bowen Technique session,
              there will need to be time to allow the animal to accept and trust
              the practitioner. For very nervous animals, most of the time of a
              first Bowen Technique session may well be spent solely on
              developing this relationship and very little Bowen work may be
              done. However, after getting accustomed to Bowen Technique, most
              animals will want it more and more, and many will come over and
              position themselves to indicate where they’d like the work doing.
            </p>
            <h3 className={styles.subheading}>
              Bowen Technique for animals can help with a variety of conditions:
            </h3>
            <ul className={styles.ul}>
              <li>Allergies and Skin conditions</li>
              <li>Arthritis and Muscular Sprains and Strains</li>
              <li>Back problems</li>
              <li>Lameness and other Gait problems</li>
              <li>Hip and Elbow Dysplasia</li>
              <li>Working or Competition dogs</li>
              <li>Dogs that pull on the lead</li>
              <li>Aggression and other Behavioural problems</li>
              <li>Stress and Anxiety disorders</li>
              <li>Cystitis and Urinary disorders</li>
              <li>Recurrent Ear problems</li>
              <li>Sciatica</li>
              <li>
                Elderly dogs or dogs who have chronic conditions (offering
                periodic maintenance/support)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSummaries;
