import React, { useState } from 'react'
import styled from "styled-components";
import { HiMenuAlt3, VscClose } from '../Icon'

export const NavigationToggleMenuIcon = ({isOpen}) => {
    return(
    <>
        {isOpen ? <VscClose /> : <HiMenuAlt3/>}
    </>
    )}

// export const NavStyle = styled.div`
//         position: fixed;
//         display: flex;
//         justify-content: center;
//         align-item: center;
// 	    top: 0;
// 	    min-height: 80px;
// 	    min-width: 80%;
//         background-color: #176B87;
//         color: #fff;
//         z-index: 5;
//     	border-radius: 0 0 25px 25px;
//         @media (max-width: 992px){
//                 transform: ${({isOpen}) => isOpen ? 'translate(0)' : 'translate(100%)'};
//                 min-width: 100%;
//                 min-height: 100%;
//                 display: block;
//                 border-radius: 0;
//                 transition: transform 0.5s ease-in-out; 
//         }
//         `

const MobileText = styled.p`
        margin: 0.2em;
        padding: 0.3em;
        color: #fff;
        
`

export const navigationText = [
    "About me",
    "Skills",
    "Project",
    "Contact"
]

export const NavigationItemMobile = () => {
    return navigationText.map((navigationTexts, index) => (
        <MobileText key={index}>
            <p>{navigationTexts}</p>
        </MobileText>
    ))
}


const DesktopMenu = styled.div`
        display: flex;
        transition: color 0.7s;
	    margin: 0 1em;
	    padding: 1.6em;
        &:hover{
            cursor: pointer;
            color: #000;
        }

        @media (max-width: 992px){
                display: none;
        }

`

export const NavigationItemDesktop = () => {
    return navigationText.map((navigationTexts, index) => (
        <DesktopMenu key={index}>
            <p>{navigationTexts}</p>
        </DesktopMenu>
    ))
}

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
        <div className='flex justify-center'>
            <div className="hidden fixed top-0 right-0 text-white text-3xl m-1 transition-colors duration-700 z-10 hover:cursor-pointer md:block"  onClick={handleToggleMobileItem}>
                <NavigationToggleMenuIcon isOpen={isOpen}/>
            </div>
            <div className='fixed top-0 flex justify-center items-center h-4 w-4/5 bg-teal-500 text-white z-10 rounded-3xl max-md:flex max-md:justify-center max-md:items-center md:top-0 md:min-h-80 max-md:min-w-80p max-md:bg-blue-700 max-md:text-white max-md:z-50 max-md:rounded-b-25
             ${isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"} max-md:transition-transform max-md:ease-in-out' isOpen={isOpen}>
                    <NavigationItemDesktop />
                <MobileMenu>
                    <NavigationItemMobile />
				</MobileMenu>
            </div>
        </div>
        )
}
export default Navigation;
