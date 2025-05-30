import TopNavbar from "../components/TopNavbar";
import Headers from "../components/Header/Headers";
import AllRightReserved from "../components/AllRightReserved";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe/AboutMe";
import Project from "../components/MyProject/Project";

export default function Homepage() {
  return (
    <>
      <nav>
        <TopNavbar />
      </nav>
      <header>
        <Headers />
      </header>
      <main>
        <section>
          <AboutMe />
        </section>
        <section>
          <Project />
        </section>
      </main>
      <footer>
        <Footer />
        <AllRightReserved />
      </footer>
    </>
  );
}
