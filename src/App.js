import React from 'react'
import Navigation from './components/NavigationComponents/Navigation'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import './style/_reset.scss'
import './style/_color.scss'
import './style/_menu.scss'
import './style/_header.scss'
import './style/_about.scss'
import './style/_skills.scss'

function App() {
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
		</>
	)
}

export default App
