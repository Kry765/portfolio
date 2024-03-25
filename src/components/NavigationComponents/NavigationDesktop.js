import { navigationText } from "./NavigationText"

export const NavigationItemDesktop = () => {
    return navigationText.map((navigationTexts, index) => (
        <div key={index}>
            <div>{navigationTexts}</div>
        </div>
    ))
}
