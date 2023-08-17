import Projectdb from '../img/project.jpeg'
import '../style/_project.scss'
import '../style/reset.scss'

function Project() {
	return (
		<div className='project wrapper'>
			<h1>Projekty</h1>
			<div className='project__card'>
				<img src={Projectdb} className='project__img' />
				<div className='project__description'>
					<p>W trakcie pracy</p>
				</div>
			</div>
		</div>
	)
}
export default Project
