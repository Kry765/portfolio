import { FaGithub } from "../Icon";

export const Icon = () => {
  return (
    <>
      <a
        href="https://github.com/Kry765/portfolio"
        className="hover:cursor-pointer hover:text-[#019760]"
      >
        <p className="flex transition-colors duration-500 py-2">
          View GitHub
          <FaGithub size={20} style={{ margin: "0 10px" }} />
        </p>
      </a>
    </>
  );
};

export default Icon;
