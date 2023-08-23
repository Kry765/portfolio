import Projectdb from '../img/project.jpeg'
import '../style/_project.scss'
import '../style/reset.scss'

function Project() {
	return (
		<div className='project wrapper' id='Project'>
			<h1>Projekty</h1>
			<a href='https://github.com/Kry765/LearnPG.git' target='_blank'>
				<div className='project__card'>
					<img src={Projectdb} className='project__img' />
					<div className='project__description'>
						<p>currently I'm working</p>
					</div>
				</div>
			</a>
		</div>
	)
}
export default Project
