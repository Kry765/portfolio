import '../style/reset.scss'
import '../style/_skills.scss'
import { DiPostgresql } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaSass } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { DiJavascript } from 'react-icons/di'
import { SiReact } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { SiBem } from 'react-icons/si'

export default function Skills() {
	return (
		<div className='wrapper skills' id='Skills'>
			<h1>Skills</h1>
			<div className='wrapper skills__cards'>
				<div className='skills__card'>
					<div className='skills__content-card  wrapper'>
						<DiPostgresql className='skills__icon' />
						<p className='skills__description'>PostgreSQL</p>
					</div>
				</div>
				<div className='wrapper skills__card'>
					<div className='skills__content-card wrapper'>
						<SiReact className='skills__icon' />
						<p className='skills__description'>React</p>
					</div>
				</div>
				<div className='wrapper skills__card'>
					<div className='skills__content-card wrapper'>
						<DiJavascript className='skills__icon' />
						<p className='skills__description'>JavaScript</p>
					</div>
				</div>
				<div className='wrapper skills__card'>
					<div className='skills__content-card  wrapper'>
						<IoLogoCss3 className='skills__icon' />
						<p className='skills__description'>CSS</p>
					</div>
				</div>
				<div className='wrapper skills__card'>
					<div className='skills__content-card  wrapper'>
						<div>
							<FaSass className='skills__icon' />
							<p className='skills__description'>SCSS</p>
						</div>
					</div>
				</div>
				<div className='wrapper skills__card'>
					<div className='skills__content-card  wrapper'>
						<AiFillHtml5 className='skills__icon' />
						<p className='skills__description'>HTML</p>
					</div>
				</div>
				<div className='wrapper skills__card'>
					<div className='skills__content-card  wrapper'>
						<AiFillGithub className='skills__icon' />
						<p className='skills__description'>GitHub</p>
					</div>
				</div>
				<div className='wrapper skills__card'>
					<div className='skills__content-card  wrapper'>
						<FaNodeJs className='skills__icon' />
						<p className='skills__description'>Nodejs</p>
					</div>
				</div>
				<div className='wrapper skills__card'>
					<div className='skills__content-card wrapper'>
						<SiBem className='skills__icon' />
						<p className='skills__description'>BEM</p>
					</div>
				</div>
			</div>
		</div>
	)
}
