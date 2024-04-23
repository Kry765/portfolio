import FooterMenuBottomData from "../../data/data";

export const FooterBottomMenu = () => {
  return (
    <div className="md:text-center">
      <p className="font-bold text-xl md:mt-8">Menu</p>
      {FooterMenuBottomData.map((FooterMenusBottomData, index) => (
        <div key={index}>{FooterMenusBottomData}</div>
      ))}
    </div>
  );
};

export default FooterBottomMenu;
