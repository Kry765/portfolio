import { useEffect } from "react";
import TopNavbar from "../components/TopNavbar";
import Headers from "../components/Header/Headers";
import AllRightReserved from "../components/AllRightReserved";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import Project from "../components/MyProject/Project";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-sine",
      offset: 0,
      once: false,
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
        <section data-aos="fade-right">
          <Project />
        </section>
      </main>
      <footer data-aos="fade-right">
        <Footer />
        <AllRightReserved />
      </footer>
    </>
  );
}
