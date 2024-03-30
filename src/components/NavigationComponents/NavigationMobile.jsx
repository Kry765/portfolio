import { navigationText } from "./NavigationText"
import styled from 'styled-components';

const MobileText = styled.p`
        margin: 0.2em;
        padding: 0.3em;
        color: #fff;
        
`

export const NavigationItemMobile = () => {
    return navigationText.map((navigationTexts, index) => (
        <MobileText key={index}>
            <p>{navigationTexts}</p>
        </MobileText>
    ))
}
