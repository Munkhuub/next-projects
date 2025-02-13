import styles from "../styles/Work.module.css";
import { Project } from "./Project";

const arr = [
  {
    img: "/images/work/ubcab.png",
    title: "UBCab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skill: [
      "React",
      "Nextjs",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    icon: "/images/work/icon-button.png",
    reverse: false,
  },
  {
    img: "/images/work/mentorhub.png",
    title: "Mentorhub",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skill: [
      "React",
      "Nextjs",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    icon: "/images/work/icon-button.png",
    reverse: true,
  },
  {
    img: "/images/work/itoim.png",
    title: "iToim",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skill: [
      "React",
      "Nextjs",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    icon: "/images/work/icon-button.png",
    reverse: false,
  },
];
export const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.workText}>
        <div className={styles.workTitle}>Work</div>
        <p>Some of the noteworthy projects I have built:</p>
      </div>
      <div className={styles.workBox}>
        {arr.map((item, index) => {
          return (
            <Project
              key={index}
              img={item.img}
              title={item.title}
              description={item.description}
              skill={item.skill}
              icon={item.icon}
              reverseParent={item.reverse}
            />
          );
        })}
      </div>
    </div>
  );
};
