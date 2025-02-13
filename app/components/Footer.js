import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src="/images/footer/icon-copyright.png"></img>
      <div>
        <p>2024</p>
      </div>
      <p>Greetings with ❤️️ from Ulaanbaatar</p>
    </div>
  );
};
