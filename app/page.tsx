import Header from "./components/Header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Internships from "./sections/Internships";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Footer from "./components/Footer";
import Certifications from "./sections/Certifications";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Internships />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
