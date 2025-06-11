import { useEffect } from "react";
import TopNavbar from "../components/TopNavbar";
import Headers from "../components/Header/Headers";
import AllRightReserved from "../components/Footer/AllRightReserved";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import Project from "../components/MyProject/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import Diploma from "../components/Diploma/Diploma";
import Contact from "../components/ContactForm/Contact";

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
      <header data-aos="fade-right">
        <Headers />
      </header>
      <main>
        <section data-aos="fade-right">
          <AboutMe />
        </section>
        <section
          data-aos="fade-right"
          className="flex justify-center items-center bg-gray-100 min-h-screen py-8"
        >
          <Project />
        </section>
        <section data-aos="fade-right">
          <Diploma />
        </section>
        <section
          data-aos="fade-right"
          className="flex justify-center items-center bg-gray-100 min-h-screen py-8"
        >
          <Contact />
        </section>
      </main>
      <footer data-aos="fade-right">
        <Footer />
      </footer>
    </>
  );
}
