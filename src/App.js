import React from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import './style/_reset.scss'
import './style/_color.scss'
import './style/_menu.scss'
import './style/_header.scss'
import './style/_about.scss'

function App() {
	return (
		<div>
			<nav>
				<Navigation />
			</nav>
			<header>
				<Header />
			</header>
			<main>
				<About />
			</main>
		</div>
	)
}

export default App
