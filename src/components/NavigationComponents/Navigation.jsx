import React, { useState } from "react";
import { HiMenuAlt3, VscClose } from "../Icon";

export const navigationText = ["About me", "Skills", "Project", "Contact"];

const NavigationToggleMenuIcon = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <VscClose className="text-white p-2 size-14 hover:cursor-pointer hover:text-white" />
      ) : (
        <HiMenuAlt3 className="text-black p-2 size-14" />
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

const NavigationItems = ({ isMobile }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        isMobile ? "md:hidden" : "md:block"
      }`}
    >
      {navigationText.map((text, index) => (
        <div
          className={`m-1 p-7 ${
            isMobile
              ? "hover:cursor-pointer hover:text-slate-950"
              : "md:my-auto p-4 text-white"
          } flex justify-center items-center flex-col ${
            isMobile ? "" : "h-full"
          }`}
          key={index}
        >
          <p className={`${isMobile ? "py-2" : ""}`}>{text}</p>
          {!isMobile && (
            <div className=" w-80 mt-auto rounded-xl bg-white h-[2px] animate-fade-left animate-once animate-ease-linear"></div>
          )}
        </div>
      ))}
    </div>
  );
};

const NavigationItem = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 flex justify-center items-center z-20 h-20 w-[70%] bg-[#176B87] opacity-90 text-cyan-100 rounded-b-[25px] md:w-full md:h-full md:rounded-none md:block md:transition-transform md:duration-500 md:ease-in-out ${
        isOpen ? "md:translate-x-0 md:z-30" : "md:translate-x-full md:z-30"
      }`}
    >
      <NavigationItems isMobile={!isOpen} />
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
