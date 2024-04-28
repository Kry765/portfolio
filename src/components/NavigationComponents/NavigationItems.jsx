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
      className={`fixed top-0 flex justify-center items-center z-20 h-20 w-[70%] bg-[#176B87] text-white rounded-b-[25px] md:w-full md:h-full md:rounded-none md:block md:transition-transform md:duration-500 md:ease-in-out ${
        isOpen ? "md:translate-x-0 md:z-30" : "md:translate-x-full md:z-30"
      }`}
    >
      <NavigationItem navigationText={navigationText} />
    </div>
  );
};
