import styled from "styled-components";
// import '../../style/_color.scss'

export const DesktopMenu = styled.div`
        display: flex;
        transition: color 0.7s;
	margin: 0 1em;
	padding: 1em;

        @media (max-width: 992px){
                display: none;
        }

`

export const BurgerIcon = styled.div`
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        font-size: 3rem;
        margin: 0.2em;
        color: $white;
        transition: color 0.7s;
        z-index: 3;

        &:hover{
                cursor: pointer;
        }

        @media (max-width: 992px){
                display: block;
        }

`

export const NavStyle = styled.div`
        position: fixed;
        display: flex;
        justify-content: center;
        align-item: center;
	top: 0;
	min-height: 80px;
	min-width: 80%;
        background-color: #30303098;
	border-radius: 0 0 25px 25px;
        @media (max-width: 992px){
                transform: ${({isOpen}) => isOpen ? 'translate(0)' : 'translate(100%)'};
                min-width: 100%;
                min-height: 100%;
                display: block;
                border-radius: 0;
                transition: transform 0.5s ease-in-out; 
        }
        `
        

export const FlexCenter = styled.div`
        display: flex;
        justify-content: center;
`

export const MobileMenu = styled.div`
        display: none;
        @media (max-width: 992px){
                display: block;
                margin: 2em;
        }

`


export const MobileText = styled.p`
        margin: 1em;
        padding: 1em;
        color: #fff;
`