import React from 'react'
import '../style/_aboutme.scss'
import '../style/reset.scss'
import myphoto from '../img/myphoto.jpg'
import { IoMdDoneAll } from 'react-icons/io'

export default function Aboutme() {
	return (
		<div>
			<div className='aboutme'>
				<div className='aboutme__box-left'>
					<img src={myphoto} alt='myphoto' className='aboutme__photo' />
				</div>
				<div className='aboutme__box-right'>
					<div>
						<h1 className='aboutme__title'>
							O<span className='aboutme__title--contrast'>&nbsp;mnie</span>
						</h1>
					</div>

					<div className='flex-description-position'>
						<IoMdDoneAll className='flex-icon-description' />
						<div>
							<p>
								Jestem obecnie na III roku studiów w Wyższe Szkole Informatyki i Zarządzania na kierunku
								<span className='aboutme__contrast-text'> Web-Developer</span>.
							</p>
						</div>
					</div>
					<div className='flex-description-position'>
						<IoMdDoneAll className='flex-icon-description' />
						<p>Przyswojona wiedza pozwala mi tworzyć strony internetowe które stają się wizytówką każdej firmy.</p>
					</div>
					<div className='flex-description-position'>
						<IoMdDoneAll className='flex-icon-description' />
						<p>Jestem otwarty na naukę najnowszych technologii dzięki której mogę rozwinąć moją pasje.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
