import React from "react";
import Navigation from "./components/NavigationComponents/Navigation";
import "../src/index.css";
import Header from "./components/HeaderComponents/Header";
import About from "./components/AboutComponents/About";
import Project from "./components/ProjectComponents/Project";
import Skills from "./components/SkillComponents/Skills";
import Footer from "./components/FooterComponents/Footer";

function Root() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <header>
        <Header />
      </header>
      <main>
        <About />
        <Skills />
        <Project />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Root;
