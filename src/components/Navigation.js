import React from 'react'
import { HiMenuAlt3 } from './Icon'

function Navigation() {
	return (
		<div className='flex justify-center'>
			<div className='nav flex justify-center align-center'>
				<div className='nav__burger-icon'>
					<HiMenuAlt3 />
				</div>
				<div className='nav__desktop-items flex'>
					<div className='nav__desktop-item'>O mnie</div>
					<div className='nav__desktop-item'>Umiejętności</div>
					<div className='nav__desktop-item'>Oferta</div>
					<div className='nav__desktop-item'>Projekty</div>
				</div>
				<div className='nav__mobile-items flex'>
					<div className='nav__mobile-item'>O mnie</div>
					<div className='nav__mobile-item'>Umiejętności</div>
					<div className='nav__mobile-item'>Oferta</div>
					<div className='nav__mobile-item'>Projekty</div>
				</div>
			</div>
		</div>
	)
}
export default Navigation
