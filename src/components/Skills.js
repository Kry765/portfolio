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
import { IoMdDoneAll } from 'react-icons/io'

export default function Skills() {
	return (
		<div className='skills' id='Skills'>
			<h1 className='skills__title'>Umiejętności</h1>
			<div className='skills__flex'>
				<div className='skills__description'>
					<div>
						<span>
							<IoMdDoneAll />
						</span>
						<p>Na co dzień pracuje z technologiami Front-Endowymi takimi jak React oraz JavaScript.</p>
					</div>
					<div>
						<p>
							<span>
								<IoMdDoneAll />
							</span>
							Obecnie jestem w trakcie nauki Docker’a oraz dodatkowego języka relacyjnych baz danych PostgreSQL, za
							pomocą którego będę mógł tworzyć w przyszłości profesjonalne sklepy internetowe.
						</p>
					</div>
				</div>
				<div className='skills__icon-skills'>
					<DiPostgresql className='skills__icon-skill' />
					<AiFillHtml5 className='skills__icon-skill' />
					<FaSass className='skills__icon-skill' />
					<IoLogoCss3 className='skills__icon-skill' />
					<DiJavascript className='skills__icon-skill' />
					<SiReact className='skills__icon-skill' />
					<FaNodeJs className='skills__icon-skill' />
					<AiFillGithub className='skills__icon-skill' />
					<SiBem className='skills__icon-skill' />
				</div>
			</div>
		</div>
	)
}
