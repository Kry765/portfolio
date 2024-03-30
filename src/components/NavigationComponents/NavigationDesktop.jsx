import { navigationText } from "./NavigationText"
import styled from "styled-components";

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
