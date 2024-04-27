import { FaLinkedin, FaGithub } from "../Icon";

export const FooterSocialMediaContent = () => {
  return (
    <div className="md:text-center">
      <h3 className="font-bold text-xl">Kry765</h3>
      <p className="my-3">
        Interested in working together? You can find me below
      </p>
      <a href="https://github.com/Kry765">
        Profile Github: <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/krzysztof-kl%C4%99ka-a75729225/">
        Profile LinkedIn:
        <FaLinkedin />
      </a>
    </div>
  );
};
