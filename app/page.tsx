import AboutMe from "./components/sections/AboutMe";
import ContactMe from "./components/sections/ContactMe";
import Hero from "./components/sections/Hero";
import MyProject from "./components/sections/MyProject";
import MySkills from "./components/sections/MySkills";
import Offers from "./components/sections/Offers";
export default function Home() {
  return (
    <main className="font-electrolize">
      <Hero />
      <AboutMe />
      <MyProject />
      <Offers />
      {/* <MySkills /> */}
      <ContactMe />
    </main>
  );
}
