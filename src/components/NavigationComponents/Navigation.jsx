import React, { useState } from "react";
import { navigationText } from "../../data/data";
import { BurgerIcon } from "./NavigationBurgerIcon";
import { NavigationItems } from "./NavigationItems";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMobileItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end">
      <BurgerIcon
        isOpen={isOpen}
        handleToggleMobileItem={handleToggleMobileItem}
      />
      <NavigationItems isOpen={isOpen} navigationText={navigationText} />
    </div>
  );
}
