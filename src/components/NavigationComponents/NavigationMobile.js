import { navigationText } from "./NavigationText"

export const NavigationItemMobile = () => {
    return navigationText.map((navigationTexts, index) => (
        <div key={index}>
            <div className='nav__mobile-item'>{navigationTexts}</div>
        </div>
    ))
}
