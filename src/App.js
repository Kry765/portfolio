import React from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import Aboutme from './components/Aboutme'
// import Skills from './components/Skills'
// import Project from './components/Project'
// import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<nav>
				<Menu id='Menu' />

				<header>
					<Header id='Header' />
				</header>
			</nav>
			<main>
				<section>
					<Aboutme id='Aboutme' />
				</section>
				{/* <section>
					<Skills id='Skills' />
				</section>
				<section>
					<Project id='Project' /> */}
				{/* </section> */}
			</main>
			{/* <footer>
				<Footer />
			</footer> */}
		</div>
	)
}

export default App
