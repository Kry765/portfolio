import React from 'react'
import Navigation from './components/NavigationComponents/Navigation'
import Header from './components/HeaderComponents/Header'
import { Wrapper } from './components/NavigationComponents/NavigationStyle'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;


function Root() {
	return (
		<Wrapper>
			<GlobalStyle />
			<nav>
				<Navigation />
			</nav>
			<header>
				<Header />
			</header>
			{/* <main> */}
				{/* <About /> */}
				{/* <Skills /> */}
				{/* <Project /> */}
			{/* </main> */}
		</Wrapper>
	)
}

export default Root
