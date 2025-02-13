import styles from "../styles/Project.module.css";

export const Project = (props) => {
  return (
    <div
      className={styles.project}
      style={{
        flexDirection: props.reverseParent == true ? "row-reverse" : "row",
      }}
    >
      <img src={props.img}></img>
      <div className={styles.container}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={styles.skill}>
          {props.skill.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>

        <img src={props.icon}></img>
      </div>
    </div>
  );
};
