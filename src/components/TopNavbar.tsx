import { menu } from "../data/menu.json";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ListMenu } from "../shared/MenuWrapper";
import { useEffect } from "react";

export default function TopNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styleMobileMenu: string =
    "fixed top-0 z-24 w-full h-full gap-x-14 flex items-center justify-center flex-col bg-black text-white transition-transform duration-800 ease-in-out";

  const styleButtonMobileMenu: string =
    "text-white md:hidden cursor-pointer hover:text-purple-500 transition-color duration-350";
  return (
    <>
      <nav
        className={`flex justify-between items-center fixed top-0 z-50 w-full px-4 py-4 transition-colors duration-300 ${
          scrolled ? "bg-black shadow-md" : "bg-transparent text-white"
        }`}
      >
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
