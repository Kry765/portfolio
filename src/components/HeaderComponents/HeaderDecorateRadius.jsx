import HeaderRadius from "./Header.module.scss";

export const DecorateHeaderRadius = () => {
  return (
    <>
      <div
        className={`${HeaderRadius.RadiusDecorate} left-[-10%] top-[-10%] bg-[#019760]`}
      ></div>
    </>
  );
};

export default DecorateHeaderRadius;
