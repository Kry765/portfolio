import React from 'react'
import '../style/_aboutme.scss'
import '../style/reset.scss'
import myphoto from '../img/myphoto.jpg'
import { IoMdDoneAll } from 'react-icons/io'

export default function Aboutme() {
	return (
		<div>
			<h1 className='aboutme__title'>O mnie</h1>
			<div className='aboutme'>
				<div className='aboutme__box-left'>
					<img src={myphoto} alt='myphoto' className='aboutme__photo' />
				</div>
				<div className='aboutme__box-right'>
					
					<div className='aboutme__description'>
						<IoMdDoneAll className='aboutme__description-icon' />
						<p>Jestem obecnie na III roku studiów w Wyższe Szkole Informatyki i Zarządzania na kierunku</p>
						<span className='aboutme__contrast-text'>Web-Developer</span>.
					</div>

					<div className='aboutme__description'>
						<IoMdDoneAll className='aboutme__description-icon' />
						<p>Przyswojona wiedza pozwala mi tworzyć strony internetowe które stają się wizytówką każdej firmy.</p>
					</div>

					<div>
						<IoMdDoneAll className='aboutme__description-icon' />
						<p className='aboutme__description'>
							Jestem otwarty na naukę najnowszych technologii dzięki której mogę rozwinąć moją pasje.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
