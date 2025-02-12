import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Skill } from "./components/Skill";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Experience />
    </div>
  );
}
