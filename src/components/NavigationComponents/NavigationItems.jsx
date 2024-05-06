import { NavigationNick } from "./NavigationNick";

const NavigationItem = ({ navigationText }) => {
  return (
    <div className="flex flex-row md:flex-col md:m-8">
      {navigationText.map((text, index) => (
        <p key={index} className="text-white md:my-8">
          {text}
        </p>
      ))}
    </div>
  );
};

export const NavigationItems = ({ isOpen, navigationText }) => {
  return (
    <div
      className={`fixed top-0 flex justify-end items-center z-20 h-20 bg-black w-full md:w-full md:h-full md:block md:transition-transform md:duration-500 md:ease-in-out ${
        isOpen ? "md:translate-x-0 md:z-30" : "md:translate-x-full md:z-30"
      }`}
    >
      <NavigationItem navigationText={navigationText} />
      <NavigationNick Kry765="Kry765" />
    </div>
  );
};
