import { menu } from "../data/menu.json";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ListMenu } from "../shared/MenuWrapper";

export default function TopNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const styleMobileMenu: string =
    "fixed top-18 z-24 w-full h-full gap-x-14 flex items-center justify-center flex-col bg-black text-white transition-transform duration-800 ease-in-out";

  const styleButtonMobileMenu: string =
    "text-white md:hidden cursor-pointer hover:text-purple-500 transition-color duration-350";
  return (
    <>
      <nav className="flex justify-between items-center fixed top-0 z-12 w-full text-white px-4 py-4 ">
        <div className="cursor-pointer hover:text-purple-500 transition-text duration-350">
          <span className="py-2">Christopher</span>
        </div>
        <div>
          <ListMenu
            items={menu}
            isLink={true}
            title=""
            className="hidden md:flex gap-x-14"
          />
        </div>
        {mobileMenu ? (
          <X className={styleButtonMobileMenu} onClick={toggleMobileMenu} />
        ) : (
          <Menu className={styleButtonMobileMenu} onClick={toggleMobileMenu} />
        )}
      </nav>
      <ul
        className={
          mobileMenu
            ? `${styleMobileMenu} translate-x-[0%]`
            : `${styleMobileMenu} translate-x-[-100%]`
        }
      >
        <ListMenu
          items={menu}
          isLink={true}
          title=""
          className="md:flex gap-x-14"
        />
      </ul>
    </>
  );
}
