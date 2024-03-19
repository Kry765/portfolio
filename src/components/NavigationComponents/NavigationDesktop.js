import { navigationText } from "./NavigationText"

export const NavigationItemDesktop = () => {
    return navigationText.map((navigationTexts, index) => (
        <div key={index}>
            <div className='nav__desktop-item'>{navigationTexts}</div>
        </div>
    ))
}
