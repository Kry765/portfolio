import React from 'react'
import { HiMenuAlt3 } from '../Icon'
import { NavigationItemDesktop } from './NavigationDesktop'
import {NavigationItemMobile} from './NavigationMobile'
import { DesktopMenu, FlexCenter, MobileMenu, BurgerIcon, NavStyle } from './NavigationStyle'

function Navigation() {

    return (
        <FlexCenter>
            <NavStyle>
                <BurgerIcon>
                    <HiMenuAlt3 />
                </BurgerIcon>
                <DesktopMenu>
                    <NavigationItemDesktop />
                </DesktopMenu>
                <MobileMenu>
					<NavigationItemMobile />
				</MobileMenu>
            </NavStyle>
        </FlexCenter>
    )
}
export default Navigation;
