import { menu } from "../data/menu.json";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ListMenu } from "../shared/MenuWrapper";

export default function TopNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className="fixed top-0 z-6 w-full bg-black text-white px-4 py-4 flex justify-between items-center">
        <div className="cursor-pointer hover:text-[#0F6D95] transition-color duration-350">
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
          <X
            className="text-white md:hidden cursor-pointer hover:text-[#0F6D95] transition-color duration-350"
            onClick={toggleMobileMenu}
          />
        ) : (
          <Menu
            className="text-white md:hidden cursor-pointer hover:text-[#0F6D95] duration-350"
            onClick={toggleMobileMenu}
          />
        )}
      </nav>
      <ul
        className={
          mobileMenu
            ? "fixed top-18 w-full h-full z-8 flex items-center justify-center bg-black text-white transition-transform translate-x-[0%] duration-800 ease-in-out flex-col gap-x-14"
            : "fixed top-18 z-8 w-full h-full flex items-center justify-center bg-black text-white transition-transform translate-x-[-100%] duration-800 ease-in-out flex-col gap-x-14"
        }
      >
        <ListMenu
          items={menu}
          isLink={true}
          title=""
          className="md:flex gap-x-14"
        />
        <ListMenu
          items={menu}
          isLink={true}
          liClassName="py-3 px-4 z-24"
          linkClassName="duration-350"
          className="hidden md:flex gap-x-14"
        />
      </ul>
    </>
  );
}
