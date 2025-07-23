import { useEffect } from "react";
import TopNavbar from "../components/TopNavbar";
import Headers from "../components/Header/Headers";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import Project from "../components/MyProject/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import Diploma from "../components/Diploma/Diploma";
import Contact from "../components/ContactForm/Contact";
import { Element } from "react-scroll";

export default function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-sine",
      offset: 0,
      once: true,
    });
  }, []);

  const styleGradient: string =
    "from-[#020617] from-75% via-violet-900 via-100% to-[#4c1d95] to-100% ";
  const styleFlexCenter: string =
    " min-h-screen flex justify-center items-center";

  return (
    <>
      <nav>
        <TopNavbar />
      </nav>
      <header className={`${styleGradient} bg-gradient-to-tl`}>
        <Headers />
      </header>
      <main>
        <Element
          name="aboutme"
          className={`${styleGradient} ${styleFlexCenter} bg-gradient-to-br `}
        >
          <AboutMe />
        </Element>
        <Element
          name="project"
          className={`${styleGradient} ${styleFlexCenter} bg-gradient-to-tr`}
        >
          <Project />
        </Element>
        <Element
          name="diploma"
          className={`${styleGradient} bg-gradient-to-bl min-h-screen`}
        >
          <Diploma />
        </Element>
        <Element
          name="contact"
          className={`${styleGradient} ${styleFlexCenter} bg-gradient-to-tl py-8`}
        >
          <Contact />
        </Element>
      </main>
      <footer className={`${styleGradient} bg-gradient-to-br `}>
        <Footer />
      </footer>
    </>
  );
}
