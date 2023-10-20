import React from 'react'
import '../style/_header.scss'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function Hedaer() {
	return (
		<React.Fragment>
			<div className='header'>
				<div className='header__circle-grey'></div>
				<div className='header__box-left'>
					<h1>
						Cześć, mam na imie <span className='header__name'>Krzysztof</span>
					</h1>
					<h2 className='header__protection-name'>frontend developer</h2>
					<div>
						<button type='button' className='header__btn'>
							Zacznijmy
						</button>
					</div>
				</div>
				<div className='header__circle-green'></div>
				<div className='header__box-right'>
					<div className='header__opacity-bg'></div>
				</div>
				<div className='header__arrow-down'>
					<AiOutlineArrowDown />
				</div>
			</div>
		</React.Fragment>
	)
}
