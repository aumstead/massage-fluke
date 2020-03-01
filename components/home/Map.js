import { useRef, useEffect } from "react";

import styles from "./Map.module.css";

function Map() {
  const mapRef = useRef();

  useEffect(() => {
    if (process.browser) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: {
          lat: 29.5536369,
          lng: 106.5712369
        },
        zoom: 17
      });

      new window.google.maps.Marker({
        position: {
          lat: 29.5536369,
          lng: 106.5712369
        },
        map: map
      });
    }
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <img
            className={styles.logo}
            src="/images/massagefluke.png"
            alt="logo"
          />
          <h2 className={styles.title}>Location</h2>
          <div className={styles.address}>
            <h4 className={styles.heading}>Address</h4>
            <p className={styles.text}>
              87/1 2456 Heping Rd
              <br />
              Yuzhong District, Jie Fang Bei
              <br />
              Chongqing, China 076003
            </p>
          </div>
          <div className={styles.hours}>
            <h4 className={styles.heading}>Hours</h4>
            <p className={styles.text}>
              Monday-Saturday
              <br />
              9:00 am - 6:00 pm
            </p>
          </div>
          <div className={styles.directions}>
            <h4 className={styles.heading}>Directions</h4>
            <p className={styles.text}>
              From Jiaochangkou Exit 4, turn right and walk to the intersection.
              At the Lavazza, turn right and walk up the hill. The SML shopping
              center is on your right, and the PSB is on your left. Building 87
              is on your right. Entrance A is next to Yonghui Supermarket.
            </p>
          </div>
        </div>
        <div className={styles.map} ref={mapRef}></div>
      </div>
    </section>
  );
}

export default Map;
