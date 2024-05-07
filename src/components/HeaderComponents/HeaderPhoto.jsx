import HeaderImg from "../../Assets/headerPhoto.png";

export const HeaderPhoto = () => {
  return (
    <div className="flex w-3/4 justify-start items-start md:hidden">
      <img
        className="md:hidden"
        src={HeaderImg}
        loading="lazy"
        alt="This is myself"
      />
    </div>
  );
};

export default HeaderPhoto;
