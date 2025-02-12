import styles from "../styles/Shapes.module.css";

export const Shapes = (props) => {
  return (
    <div className={styles.shapes}>
      <img src={props.img}></img>
      <div>
        <h1>{props.title}</h1>
        <ul>
          {props.description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <p>{props.time}</p>
    </div>
  );
};
