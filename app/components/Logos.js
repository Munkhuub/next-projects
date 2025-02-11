import styles from "../styles/Logos.module.css";

export const Logos = (props) => {
  return (
    <div className={styles.logos}>
      <img src={props.img}></img>
      <p>{props.title}</p>
    </div>
  );
};
