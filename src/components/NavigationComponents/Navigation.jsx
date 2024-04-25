import React, { useState } from "react";
import { Link } from "react-scroll";

import { BurgerIcon } from "./NavigationBurgerIcon";
import NavStyle from "./NavigationStyle.module.scss";

export const navigationText = [
  <Link to="home" smooth={true}>
    <p className={NavStyle.navSpace}>Home</p>
  </Link>,
  <Link to="aboutme" smooth={true}>
    <p className={NavStyle.navSpace}>About me</p>
  </Link>,
  <Link to="skills" smooth={true}>
    <p className={`${NavStyle.navSpace}`}>Skills</p>
  </Link>,
  <Link to="project" smooth={true}>
    <p className={NavStyle.navSpace}>Project</p>
  </Link>,
  <Link to="contact" smooth={true}>
    <p className={NavStyle.navSpace}>Contact</p>
  </Link>,
];

const NavigationItemMobile = () => {
  return navigationText.map((navigationTexts, index) => (
    <div
      className="mt-12 p-4 text-white flex justify-start items-center"
      key={index}
    >
      <p>{navigationTexts}</p>
    </div>
  ));
};

const NavigationItemDesktop = () => {
  return navigationText.map((navigationTexts, index) => (
    <div className="p-7 hover:cursor-pointer md:hidden " key={index}>
      <p>{navigationTexts}</p>
    </div>
  ));
};

const NavigationItem = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 flex justify-center items-center z-20 h-20 w-[70%] bg-[#176B87] text-white rounded-b-[25px] md:w-full md:h-full md:rounded-none md:block md:transition-transform md:duration-500 md:ease-in-out ${
        isOpen ? "md:translate-x-0 md:z-30" : "md:translate-x-full md:z-30"
      }`}
    >
      <NavigationItemDesktop />
      <div className="hidden md:block md:m-8">
        <NavigationItemMobile />
      </div>
    </div>
  );
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMobileItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center">
      <BurgerIcon
        isOpen={isOpen}
        handleToggleMobileItem={handleToggleMobileItem}
      />
      <NavigationItem isOpen={isOpen} />
    </div>
  );
}
