import React from 'react'
import Navigation from './components/NavigationComponents/Navigation'
import Header from './components/HeaderComponents/Header'
// import About from './components/About'
// import Skills from './components/SkillComponents/Skills'
// import Project from './components/Project'
// import './style/_reset.scss'
// import './style/_color.scss'
// import './style/_header.scss'
// import './style/_about.scss'
// import './style/_skills.scss'

function Root() {
	return (
		<>
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
		</>
	)
}

export default Root
