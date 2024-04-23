import { FaLinkedin, FaGithub } from "../Icon";
import { FooterContactMe } from "./FooterContactMe";
import { FooterBottomMenu } from "./FooterBottomMenu";

const FooterSocialMediaContent = () => {
  return (
    <div className="flex justify-start flex-col md:text-center">
      <h3 className="font-bold text-xl">Kry765</h3>
      <p className="mt-3">
        Interested in working together? You can find me below
      </p>
      <div>
        <div className="flex flex-row md:justify-center">
          <a href="https://github.com/Kry765" className="m-2">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/krzysztof-kl%C4%99ka-a75729225/"
            className="m-2"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

const RightReserved = () => {
  return (
    <p className="text-right md:text-center p-6 md:mt-8">
      Kry765 | 2024 &copy;All right reserved
    </p>
  );
};

export default function Footer() {
  return (
    <div className="bg-[#176b87] text-white w-full" id="contact">
      <div className="flex flex-row justify-around items mx-24 pt-12 md:flex-col">
        <FooterSocialMediaContent />
        <FooterBottomMenu />
        <FooterContactMe />
      </div>
      <>
        <RightReserved />
      </>
    </div>
  );
}
