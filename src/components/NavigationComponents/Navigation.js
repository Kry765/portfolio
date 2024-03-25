import React, { useState } from 'react'
import { NavigationItemDesktop } from './NavigationDesktop'
import {NavigationItemMobile} from './NavigationMobile'
import {NavigationToggleMenuIcon} from './NavigationToggleMenuIcon'
import { DesktopMenu, FlexCenter, MobileMenu, BurgerIcon, NavStyle, MobileText } from './NavigationStyle'



function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMobileItem = () => {
        setIsOpen(!isOpen)
    }

    return (
        <FlexCenter>
            <BurgerIcon onClick={handleToggleMobileItem}>
                <NavigationToggleMenuIcon isOpen={isOpen}/>
            </BurgerIcon>
            <NavStyle isOpen={isOpen}>
                <DesktopMenu>
                    <NavigationItemDesktop />
                </DesktopMenu>
                <MobileMenu>
                    <MobileText>
                        <NavigationItemMobile />
                    </MobileText>
				</MobileMenu>
            </NavStyle>
        </FlexCenter>
    )
}
export default Navigation;
