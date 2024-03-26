import React from 'react'
import Navigation from './components/NavigationComponents/Navigation'
import Header from './components/HeaderComponents/Header'
import { Wrapper } from './components/NavigationComponents/NavigationStyle'

function Root() {
	return (
		<Wrapper>
		
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
