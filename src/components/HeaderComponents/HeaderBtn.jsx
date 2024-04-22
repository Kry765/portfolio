import { Link } from "react-scroll";

export const HeaderBtn = () => {
  return (
    <Link to="aboutme" smooth={true} durations={500}>
      <button className="p-2 z-10 md:z-10 animate-fade-right hover:cursor-pointer hover:bg-[#176B87] border-none bg-[#64ccc5] text-white rounded-2xl	h-[50px] w-[250px] font-bold uppercase transition duration-300">
        Let's Go
      </button>
    </Link>
  );
};

export default HeaderBtn;
