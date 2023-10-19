import React, { useState } from 'react'
import '../style/reset.scss'
import '../style/_menu.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { VscMenu } from 'react-icons/vsc'

export default function Menu() {
	const [openNav, setOpenNav] = useState('')
	const handleMobileNav = () => {
		setOpenNav(!openNav)
	}

	return (
		<React.Fragment>
			<div className='nav' id='Menu'>
				<div className='nav__desktop-items-list'>
					<div className='nav__desktop-item-list'>Strona Główna</div>
					<div className='nav__desktop-item-list'>O mnie</div>
					<div className='nav__desktop-item-list'>Oferta</div>
					<div className='nav__desktop-item-list'>Umiejętności</div>
					<div className='nav__desktop-item-list'>Projekty</div>
				</div>
				<div className={openNav ? 'nav__mobile-nav--open-nav' : 'nav__mobile-nav'}>
					<div className='nav__mobile-item-list'>Strona Główna</div>
					<div className='nav__mobile-item-list'>O mnie</div>
					<div className='nav__mobile-item-list'>Oferta</div>
					<div className='nav__mobile-item-list'>Umiejętności</div>
					<div className='nav__mobile-item-list'>Projekty</div>
				</div>
			</div>
			<div className='burger-icon' onClick={handleMobileNav}>
				{openNav ? <AiOutlineClose /> : <VscMenu />}
			</div>
		</React.Fragment>
	)
}

{
	/* }*/
}
