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
			<div className='skills__flex'>
				<div className='skills__description'>
					<h1 className='skills__title'>Umiejętności</h1>
					<div className='skills__icon-position'>
						<div className='flex-description-position'>
							<div>
								<IoMdDoneAll className='flex-icon-description' />
							</div>
							<p>
								Obecnie jestem w trakcie nauki <span className='contrast'>Docker’a</span> oraz dodatkowego języka
								relacyjnych baz danych <span className='contrast'>PostgreSQL</span>, za pomocą którego będę mógł tworzyć
								w przyszłości profesjonalne sklepy internetowe.
							</p>
						</div>
						<div className='flex-description-position'>
							<div>
								<IoMdDoneAll className='flex-icon-description' />
							</div>
							<p>
								Na co dzień pracuje z technologiami Front-Endowymi takimi jak <span className='contrast'>React </span>
								oraz
								<span className='contrast'> JavaScript.</span>
							</p>
						</div>
					</div>
				</div>
				<div className='skills__icon-skills'>
					<div>
						<DiPostgresql className='skills__icon-skill' />
						<p className='skills__name'>postgresql</p>
					</div>
					<div>
						<AiFillHtml5 className='skills__icon-skill' />
						<p className='skills__name'>html</p>
					</div>
					<div>
						<FaSass className='skills__icon-skill' />
						<p className='skills__name'>scss</p>
					</div>
					<div>
						<IoLogoCss3 className='skills__icon-skill' />
						<p className='skills__name'>css</p>
					</div>
					<div>
						<DiJavascript className='skills__icon-skill' />
						<p className='skills__name'>js</p>
					</div>
					<div>
						<SiReact className='skills__icon-skill' />
						<p className='skills__name'>react</p>
					</div>
					<div>
						<FaNodeJs className='skills__icon-skill' />
						<p className='skills__name'>node.js</p>
					</div>
					<div>
						<AiFillGithub className='skills__icon-skill' />
						<p className='skills__name'>github</p>
					</div>
					<div>
						<SiBem className='skills__icon-skill' />
						<p className='skills__name'>BEM</p>
					</div>
				</div>
			</div>
		</div>
	)
}
