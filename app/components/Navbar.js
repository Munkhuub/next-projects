import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <p className={styles.tom}>Tom</p>
      <div className={styles.menu}>
        <div className={styles.menuText}>
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
        </div>
        <img src="/images/nav/Icon.png"></img>
        <button className={styles.cv}>Download CV</button>
      </div>
    </div>
  );
};
