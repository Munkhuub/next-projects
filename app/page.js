import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Skill } from "./components/Skill";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
