import styles from "../styles/Experience.module.css";
import { Shapes } from "./Shapes";

const arr = [
  {
    img: "/images/exp/icon-upwork.png",
    title: "Sr. Frontend Developer",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    time: "Nov 2021 - Present",
  },
  {
    img: "/images/exp/icon-upwork.png",
    title: "Team Lead",
    description: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    time: "Jul 2017 - Oct 2021",
  },
  {
    img: "/images/exp/icon-upwork.png",
    title: "Full Stack Developer",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    time: "Dec 2015 - May 2017",
  },
];

export const Experience = () => {
  return (
    <div className={styles.exp}>
      <div className={styles.expText}>
        <div className={styles.expTitle}>Experience</div>
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <div className={styles.expBox}>
        {arr.map((item, index) => {
          return (
            <Shapes
              key={index}
              title={item.title}
              img={item.img}
              description={item.description}
              time={item.time}
            />
          );
        })}
      </div>
    </div>
  );
};
