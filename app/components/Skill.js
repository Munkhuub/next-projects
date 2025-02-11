import styles from "../styles/Skill.module.css";
import { Logos } from "./Logos";

const arr = [
  {
    img: "/images/skill/icon-javscript.png",
    title: "Javascript",
  },
  {
    img: "/images/skill/icon-javscript.png",
    title: "Javascript",
  },
  {
    img: "/images/skill/icon-javscript.png",
    title: "Javascript",
  },
  {
    img: "/images/skill/icon-javscript.png",
    title: "Javascript",
  },
];

export const Skill = () => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillText}>
        <div className={styles.title}>Skills</div>
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div className={styles.logos}>
        {arr.map((item, index) => {
          return <Logos key={index} title={item.title} img={item.img} />;
        })}
      </div>
    </div>
  );
};
