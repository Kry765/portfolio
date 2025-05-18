import { menu } from "../data/menu.json"
import { Menu } from "lucide-react";
import { useState } from "react";

interface MenuItem {
    key: string;
    label: string;
}

export default function TopNavbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }


    return (
        <nav className="grid grid-cols-[1fr_auto] py-6 px-4 bg-black text-white ">
            <div className="cursor-pointer hover:text-[#0F6D95]">
                <span>Christopher</span>
            </div>
                <Menu className="text-white flex md:hidden cursor-pointer hover:text-[#0F6D95]" onClick={toggleMobileMenu}/>
                    <ul className={mobileMenu ? "flex justify-center flex-col min-h-screen gap-x-14" : 'hidden justify-start gap-x-14'}>
                    {(menu as MenuItem[]).map((item) => (
                        <li key={item.key}> 
                            <a className="cursor-pointer hover:text-[#0F6D95]">{item.label}</a>
                        </li>
                    ))}
                    </ul>
                <ul className="md:flex hidden justify-start gap-x-14">
                    {(menu as MenuItem[]).map((item) => (
                        <li key={item.key}> 
                            <a className="cursor-pointer hover:text-[#0F6D95]">{item.label}</a>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}