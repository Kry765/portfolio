import { FaGithub } from "../Icon";

export const Icon = () => {
  return (
    <div className="flex py-4">
      <a
        href="https://github.com/Kry765/portfolio"
        className="hover:cursor-pointer hover:text-[#64ccc5]"
      >
        <p className="flex transition-colors duration-500">
          View GitHub
          <FaGithub size={20} style={{ margin: "0 10px" }} />
        </p>
      </a>
    </div>
  );
};

export default Icon;
