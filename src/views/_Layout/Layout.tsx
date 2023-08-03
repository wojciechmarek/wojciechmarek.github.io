import { Landing } from "../Landing";
import { Experience } from "../Experience";
import { About } from "../About";
import { Projects } from "../Projects";
import { Footer } from "../Footer";
import { Contact } from "../Contact";
import { Medium } from "../Medium";
import { Navbar } from "../_Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Projects />
      {/* <Medium /> */}
      <Contact />
      <Footer />
    </>
  );
};
