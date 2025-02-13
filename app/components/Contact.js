import styles from "../styles/Contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactText}>
        <div className={styles.contactTitle}>Get in touch</div>
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="contactBox">
        <div className={styles.mailContainer}>
          <img src="/images/contact/icon-mail.png"></img>
          <p>tom@pinecone.mn</p>
          <img src="/images/contact/icon-copy.png"></img>
        </div>
        <div className={styles.phoneContainer}>
          <img src="/images/contact/icon-mail.png"></img>
          <p>+976 88112233</p>
          <img src="/images/contact/icon-copy.png"></img>
        </div>
      </div>
      <div className={styles.linkContainer}>
        <p>You may also find me on these platforms!</p>
        <div className="icons">
          <img src="/images/contact/iconGithub.png"></img>
          <img src="/images/contact/iconTwitter.png"></img>
          <img src="/images/contact/iconFigma.png"></img>
        </div>
      </div>
    </div>
  );
};
