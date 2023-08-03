import { Landing } from "../Landing";
import { Experience } from "../Experience";
import { Navbar } from "../../components/organisms/Navbar/Navbar";
import { About } from "../About";
import { Projects } from "../Projects";
import { Footer } from "../Footer";
import { Contact } from "../Contact";
import { Medium } from "../Medium";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Medium />
      <Contact />
      <Footer />
    </>
  );
};
