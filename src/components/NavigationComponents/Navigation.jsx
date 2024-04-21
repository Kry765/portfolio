import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, VscClose } from "../Icon";
export const navigationText = [
  <Link to="home" smooth={true} duration={500}>
    <div className=" p-4 text-white flex justify-start items-center hover:cursor-pointer hover:text-[#64ccc5]">
      <p className="transition-color duration-500">Home</p>
    </div>
  </Link>,
  <Link to="aboutme" smooth={true} duration={500}>
    <div className=" p-4 text-white flex justify-start items-center hover:cursor-pointer hover:text-[#64ccc5]">
      <p className="transition-color duration-500">About me</p>
    </div>
  </Link>,
  <Link to="skills" smooth={true} duration={500}>
    <div className=" p-4 text-white flex justify-start items-center hover:cursor-pointer hover:text-[#64ccc5]">
      <p className="transition-color duration-500">Skills</p>
    </div>
  </Link>,
  <Link to="project" smooth={true} duration={500}>
    <div className=" p-4 text-white flex justify-start items-center hover:cursor-pointer hover:text-[#64ccc5]">
      <p className="transition-color duration-500">Project</p>
    </div>
  </Link>,
  <Link to="contact" smooth={true} duration={500}>
    <div className=" p-4 text-white flex justify-start items-center hover:cursor-pointer hover:text-[#64ccc5]">
      <p className="transition-color duration-500">Contact</p>
    </div>
  </Link>,
];

const NavigationToggleMenuIcon = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <VscClose className="text-white p-2 size-14 hover:cursor-pointer hover:text-white" />
      ) : (
        <HiMenuAlt3 className="text-black p-2 size-14 hover:cursor-pointer hover:text-black" />
      )}
    </>
  );
};

const BurgerIcon = ({ isOpen, handleToggleMobileItem }) => {
  return (
    <div
      className="hidden fixed top-0 right-0 text-white text-3xl m-1 transition-colors duration-700 z-10 hover:cursor-pointer md:block md:z-50"
      onClick={handleToggleMobileItem}
    >
      <NavigationToggleMenuIcon isOpen={isOpen} className="z-50" />
    </div>
  );
};

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
    <div
      className="flex m-1 p-7 transition duration-300 hover:cursor-pointer hover:text-slate-950 md:hidden "
      key={index}
    >
      <p>{navigationTexts}</p>
    </div>
  ));
};

const NavigationItem = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 flex justify-center items-center z-20 h-20 w-[70%] bg-[#176B87] opacity-95 text-cyan-100 rounded-b-[25px] md:w-full md:h-full md:rounded-none md:block md:transition-transform md:duration-500 md:ease-in-out ${
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

function Navigation() {
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

export default Navigation;
