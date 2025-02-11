import styles from "../styles/Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroText}>
          <h1>Hi, I’m Tom 👋</h1>
          <p>
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.location}>
            <img src="/images/hero/locationIcon.png"></img>
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className={styles.available}>
            <div className={styles.greenDot}></div>
            <p>Available for new projects</p>
          </div>
        </div>
        <div className={styles.heroLinks}>
          <img src="/images/hero/iconGithub.png"></img>
          <img src="/images/hero/iconTwitter.png"></img>
          <img src="/images/hero/iconFigma.png"></img>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.shape}></div>
        <img className={styles.tom} src="/images/hero/tom.png"></img>
      </div>
    </div>
  );
};
