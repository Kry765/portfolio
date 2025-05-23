import TopNavbar from "../components/TopNavbar";
import Headers from "../components/Headers";
import AllRightReserved from "../components/AllRightReserved";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

export default function Homepage() {
  return (
    <>
      <TopNavbar />
      <Headers />
      <AboutMe />
      <Footer />
      <AllRightReserved />
    </>
  );
}
