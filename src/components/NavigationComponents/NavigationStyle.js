import styled from "styled-components";
// import '../../style/_color.scss'

export const DesktopMenu = styled.div`
        display: flex;
        transition: color 0.7s;
		margin: 0 1em;
		padding: 1em;
`

export const BurgerIcon = styled.div`
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        font-size: 3rem;
        margin: 0.2em;
        color: $white;
        transition: color 0.7s;
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
	border-radius: 0 0 25px 25px;`

export const FlexCenter = styled.div`
        display: flex;
        justify-content: center;
`

export const MobileMenu = styled.div`
        display: none;
`