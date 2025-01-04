import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <main>
      <Banner />
      <About />
      <Education></Education>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
