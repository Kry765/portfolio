import { navigationText } from "./NavigationText"
import styled from "styled-components";

const DesktopMenu = styled.div`
        display: flex;
        transition: color 0.7s;
	    margin: 0 1em;
	    padding: 1em;
        &:hover{
            cursor: pointer;
            color: #fff;
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
