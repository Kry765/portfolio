import React, { useState } from "react";
import styled from "styled-components";
import { HiMenuAlt3, VscClose } from "../Icon";

export const navigationText = ["About me", "Skills", "Project", "Contact"];

const MobileText = styled.p`
  margin: 0.2em;
  padding: 0.3em;
  color: #fff;
`;

export const NavigationToggleMenuIcon = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <VscClose className="text-black z-30" />
      ) : (
        <HiMenuAlt3 className="text-black z-30" />
      )}
    </>
  );
};

export const NavigationItemMobile = () => {
  return navigationText.map((navigationTexts, index) => (
    <MobileText key={index}>
      <p>{navigationTexts}</p>
    </MobileText>
  ));
};

const DesktopMenu = styled.div`
  display: flex;
  transition: color 0.7s;
  margin: 0 1em;
  padding: 1.6em;
  &:hover {
    cursor: pointer;
    color: #000;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavigationItemDesktop = () => {
  return navigationText.map((navigationTexts, index) => (
    <DesktopMenu key={index}>
      <p>{navigationTexts}</p>
    </DesktopMenu>
  ));
};

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMobileItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center">
      <div
        className="hidden fixed top-0 right-0 text-white text-3xl m-1 transition-colors duration-700 z-10 hover:cursor-pointer md:block"
        onClick={handleToggleMobileItem}
      >
        <NavigationToggleMenuIcon isOpen={isOpen} className="z-40" />
      </div>
      <div
        className={`fixed top-0 flex justify-center items-center h-20 w-[50%] bg-blue-700 text-cyan-100 rounded-b-[25px] md:w-full md:h-full md:rounded-none md:block md:transition-transform md:duration-500 md:ease-in-out ${
          isOpen ? "md:translate-x-0" : "md:translate-x-full"
        }`}
      >
        <NavigationItemDesktop />
        <div className="hidden md:block md:m-8">
          <NavigationItemMobile />
        </div>
      </div>
    </div>
  );
}
export default Navigation;
