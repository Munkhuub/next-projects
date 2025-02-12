import styles from "../styles/Skill.module.css";
import { Logos } from "./Logos";

const arr = [
  {
    img: "/images/skill/icon-javscript.png",
    title: "Javascript",
  },
  {
    img: "/images/skill/icon-typescript.png",
    title: "Typescript",
  },
  {
    img: "/images/skill/icon-react.png",
    title: "React",
  },
  {
    img: "/images/skill/icon-nextjs.png",
    title: "Next.js",
  },
  {
    img: "/images/skill/icon-nodejs.png",
    title: "Node.js",
  },
  {
    img: "/images/skill/icon-express.png",
    title: "Express.js",
  },
  {
    img: "/images/skill/icon-nest.png",
    title: "Nest.js",
  },
  {
    img: "/images/skill/icon-socket.png",
    title: "Socket.io",
  },
  {
    img: "/images/skill/icon-postgresql.png",
    title: "PostgreSQL",
  },
  {
    img: "/images/skill/icon-mongodb.png",
    title: "MongoDB",
  },
  {
    img: "/images/skill/icon-sass.png",
    title: "Sass/Scss",
  },
  {
    img: "/images/skill/icon-tailwind.png",
    title: "Tailwindcss",
  },
  {
    img: "/images/skill/icon-figma.png",
    title: "Figma",
  },
  {
    img: "/images/skill/icon-cypress.png",
    title: "Cypress",
  },
  {
    img: "/images/skill/icon-storybook.png",
    title: "Storybook",
  },
  {
    img: "/images/skill/icon-git.png",
    title: "Git",
  },
];

export const Skill = () => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillText}>
        <div className={styles.title}>Skills</div>
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div className={styles.box}>
        {arr.map((item, index) => {
          return <Logos key={index} title={item.title} img={item.img} />;
        })}
      </div>
    </div>
  );
};
