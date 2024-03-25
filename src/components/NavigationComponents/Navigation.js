import React, { useState } from 'react'
import { NavigationItemDesktop } from './NavigationDesktop'
import {NavigationItemMobile} from './NavigationMobile'
import {NavigationToggleMenuIcon} from './NavigationToggleMenuIcon'
import {Wrapper, FlexCenter, BurgerIcon, NavStyle } from './NavigationStyle'
import styled from "styled-components";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMobileItem = () => {
        setIsOpen(!isOpen)
    }

    const MobileMenu = styled.div`
        display: none;
        @media (max-width: 992px){
                display: block;
                margin: 2em;
        }

`
    return (
        <Wrapper>
        <FlexCenter>
            <BurgerIcon onClick={handleToggleMobileItem}>
                <NavigationToggleMenuIcon isOpen={isOpen}/>
            </BurgerIcon>
            <NavStyle isOpen={isOpen}>
                    <NavigationItemDesktop />
                <MobileMenu>
                    <NavigationItemMobile />
				</MobileMenu>
            </NavStyle>
        </FlexCenter>
        </Wrapper>
    )
}
export default Navigation;
