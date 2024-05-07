import HeaderImg from "../../Assets/headerPhoto.png";

export const HeaderPhoto = () => {
  return (
    <div className="flex w-1/2 items-center md:hidden">
      <img src={HeaderImg} loading="lazy" alt="This is myself" />
    </div>
  );
};

export default HeaderPhoto;
