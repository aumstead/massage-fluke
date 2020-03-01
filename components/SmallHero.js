import styles from './SmallHero.module.css'

const SmallHero = props => {
  return (
    <React.Fragment>
      <section className={styles.smallHero} style={{marginBottom: props.marginBottom}}>
        <h1 className={styles.h1}>{props.title}</h1>
      </section>
      <div className={styles.smallHeroBackground}></div>
    </React.Fragment>
  )
}

export default SmallHero;