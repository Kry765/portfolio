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

  return (
    <>
      <nav>
        <TopNavbar />
      </nav>
      <header className="bg-gradient-to-tl from-[#020617] from-80% via-violet-900 via-120% to-[#4c1d95] to-100%">
        <Headers />
      </header>
      <main>
        <Element
          name="aboutme"
          className="min-h-screen bg-gradient-to-br from-[#020617] from-75% via-violet-900 via-100% to-[#4c1d95] to-100% min-h-screen flex justify-center items-center"
        >
          <AboutMe />
        </Element>
        <Element
          name="project"
          // data-aos="fade-right"
          className="flex justify-center items-center bg-gradient-to-tr from-[#020617] from-75% via-violet-900 via-100% to-[#4c1d95] to-100% min-h-screen min-h-screen py-8"
        >
          <Project />
        </Element>
        <Element
          name="diploma"
          // data-aos="fade-right"
          className="bg-gradient-to-bl from-[#020617] from-75% via-violet-900 via-100% to-[#4c1d95] to-100%  min-h-screen"
        >
          <Diploma />
        </Element>
        <Element
          name="contact"
          // data-aos="fade-right"
          className="bg-gradient-to-tl from-[#020617] from-75% via-violet-900 via-100% to-[#4c1d95] to-100% flex justify-center items-center min-h-screen py-8"
        >
          <Contact />
        </Element>
      </main>
      <footer data-aos="fade-right">
        <Footer />
      </footer>
    </>
  );
}

{
  /* 

  
  
*/
}
