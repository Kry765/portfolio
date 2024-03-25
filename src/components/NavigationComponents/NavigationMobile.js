import { navigationText } from "./NavigationText"

export const NavigationItemMobile = () => {
    return navigationText.map((navigationTexts, index) => (
        <div key={index}>
            <p>{navigationTexts}</p>
        </div>
    ))
}
