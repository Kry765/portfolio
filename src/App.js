import React from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import './style/_reset.scss'
import './style/_color.scss'
import './style/_menu.scss'
import './style/_header.scss'

function App() {
	return (
		<div>
			<nav>
				<Navigation />
			</nav>
			<header>
				<Header />
			</header>
		</div>
	)
}

export default App
