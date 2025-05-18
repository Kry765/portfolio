import { menu } from "../data/menu.json";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface MenuItem {
  key: string;
  label: string;
}

export default function TopNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className="fixed top-0 z-40 w-full bg-black text-white px-4 py-6 flex justify-between items-center">
        <div className="cursor-pointer hover:text-[#0F6D95] transition-color duration-350">
          <span>Christopher</span>
        </div>
        <ul className="hidden md:flex gap-x-14">
          {(menu as MenuItem[]).map((item) => (
            <li key={item.key}>
              <a className="cursor-pointer hover:text-[#0F6D95] transition-color duration-350">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
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
      <div>
        <ul
          className={
            mobileMenu
              ? "flex justify-center items-center min-h-screen bg-black text-white transition-transform translate-x-[0%] duration-800 ease-in-out px-4 py-6 flex-col gap-x-14"
              : "flex items-center min-h-screen bg-black text-white transition-transform translate-x-[-100%] duration-800 ease-in-out justify-center flex-col gap-x-14"
          }
        >
          {(menu as MenuItem[]).map((item) => (
            <li
              key={item.key}
              className="cursor-pointer hover:text-[#0F6D95] py-3 px-4 duration-350"
            >
              <a>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
