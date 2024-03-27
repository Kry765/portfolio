import styled from "styled-components";
// import '../../style/_color.scss'

export const Wrapper = styled.div`
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;

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
        background-color: #176B87;
        color: #fff;
        z-index: 5;
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



