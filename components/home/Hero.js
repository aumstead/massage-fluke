import heroStyles from "./Hero.module.css";

function Hero() {
  return (
    <div className={heroStyles.heroContainer}>
      <div className={heroStyles.background}></div>
      <div className={heroStyles.left}>
        <div className={heroStyles.leftContent}>
          <h1 className={heroStyles.h1}>Karen Bayley</h1>
          <p className={heroStyles.subheading}>
            Bowen and Massage Specialist
          </p>
          <img className={heroStyles.photo} src="/images/profile.jpg" alt="Karen"/>
          <button className={heroStyles.cta}>Book an appointment!</button>
        </div>
      </div>
      <div className={heroStyles.right}></div>
    </div>
  );
}

export default Hero;
