import React from 'react'
import { HiMenuAlt3 } from '../Icon'
import { NavigationItemDesktop } from './NavigationDesktop'
import {NavigationItemMobile} from './NavigationMobile'

function Navigation() {

    return (
        <div className='flex justify-center'>
            <div className='nav flex justify-center align-center'>
                <div className='nav__burger-icon'>
                    <HiMenuAlt3 />
                </div>
                <div className='nav__desktop-items flex'>
                    <NavigationItemDesktop />
                </div>
                <div className='nav__mobile-items flex'>
					<NavigationItemMobile />
				</div>
            </div>
        </div>
    )
}
export default Navigation;
