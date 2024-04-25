import { HiMenuAlt3, VscClose } from "../Icon";

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

export const BurgerIcon = ({ isOpen, handleToggleMobileItem }) => {
  return (
    <div
      className="hidden fixed top-0 right-0 text-white text-3xl m-1 transition-colors duration-700 z-10 hover:cursor-pointer md:block md:z-50"
      onClick={handleToggleMobileItem}
    >
      <NavigationToggleMenuIcon isOpen={isOpen} className="z-50" />
    </div>
  );
};
