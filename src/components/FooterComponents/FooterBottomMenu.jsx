import { FooterBottomMenuData } from "../../data/data";

export const FooterBottomMenu = () => {
  return (
    <div className="md:text-center">
      <p className="font-bold text-xl md:mt-8">Menu</p>
      {FooterBottomMenuData.map((FooterMenusBottomDatas, index) => (
        <div key={index}>{FooterMenusBottomDatas}</div>
      ))}
    </div>
  );
};
