import React from "react";
import Navigation from "./components/NavigationComponents/Navigation";
import "../src/index.css";
import Header from "./components/HeaderComponents/Header";
import About from "./components/AboutComponents/About";
// import Project from './components/ProjectComponents/Project'
// import { createGlobalStyle } from 'styled-components';
// import Skills from './components/SkillComponents/Skills'
// import styled from 'styled-components'
// import Footer from './components/FooterComponents/Footer'

// const TitleStyle = styled.h3`
//   font-size: 2rem;
//   padding: 0 2.6em;
//   width: 80%;
//   color: #176B87;
// `

// const Title = (props) => {
// return(<TitleStyle>{props.Project}</TitleStyle>)
// }

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
        {/* <Skills />
        <Title Project="Project" />
        <Project />*/}
      </main>
      {/* <footer>
        <Footer />
      </footer>  */}
    </>
  );
}

export default Root;
