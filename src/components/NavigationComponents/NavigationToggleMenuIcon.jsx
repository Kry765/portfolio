import { HiMenuAlt3, VscClose } from '../Icon'

export const NavigationToggleMenuIcon = ({isOpen}) => {
    return(
    <>
        {isOpen ? <VscClose /> : <HiMenuAlt3/>}
    </>
    )

}