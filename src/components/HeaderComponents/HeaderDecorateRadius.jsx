import HeaderRadius from "./Header.module.scss";

export const DecorateHeaderRadius = () => {
  return (
    <>
      <div
        className={`${HeaderRadius.RadiusDecorate} rounded-full absolute -z-0 w-96 md:w-72 md:h-72 h-96 right-[-10%] bottom-[-10%] bg-[#176B87]`}
      ></div>
      <div
        className={`${HeaderRadius.RadiusDecorate} left-[-10%] top-[-10%] bg-[#cbcccc]`}
      ></div>
    </>
  );
};

export default DecorateHeaderRadius;
