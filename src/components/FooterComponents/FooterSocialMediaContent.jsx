import { FaLinkedin, FaGithub } from "../Icon";

export const FooterSocialMediaContent = () => {
  return (
    <div className="md:text-center">
      <h3 className="font-bold text-xl text-[#019760]">Kry765</h3>
      <p className="my-3">
        Interested in working together? You can find me below
      </p>
      <div className="flex md:justify-center">
        <a href="https://github.com/Kry765">
          <FaGithub size={20} className="m-2 hover:text-[#019760]" />
        </a>
        <a href="https://www.linkedin.com/in/krzysztof-kl%C4%99ka-a75729225/">
          <FaLinkedin size={20} className="m-2 hover:text-[#019760]" />
        </a>
      </div>
    </div>
  );
};
