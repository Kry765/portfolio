import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  MdEmail,
  FaPhone,
  FaLocationDot,
  FaDiscord,
} from "../Icon";

const FooterContactMe = () => {
  return (
    <div>
      <div>
        <h3 className="flex flex-row text-xl mx-4 font-bold md:justify-center md:mt-8">
          Contact Me
        </h3>
        <div className="flex md:justify-center">
          <div className="mx-4 my-2 ">
            <MdEmail />
          </div>
          <div className="my-1 md:justify-center">
            krzysztofkleka91@gmail.com
          </div>
        </div>
        <div className="flex md:justify-center">
          <div className="mx-4 my-2 ">
            <FaPhone />
          </div>
          <div className="my-1">573 226 219</div>
        </div>
        <div className="flex md:justify-center">
          <div className="mx-4 my-2">
            <FaLocationDot />
          </div>
          <div className="my-1">Żywiec, Poland"</div>
        </div>
      </div>
    </div>
  );
};

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

const FooterBottomMenu = () => {
  return (
    <div className="md:text-center">
      <p className="font-bold text-xl md:mt-8">Menu</p>
      <div>
        <p className="mt-3">About Me</p>
        <p className="mt-3">Skills</p>
        <p className="mt-3">Project</p>
        <p className="mt-3">Contact</p>
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
    <div className="bg-[#176b87] text-white w-full">
      <div className="flex flex-row justify-around items mx-24 pt-12 md:flex-col">
        <FooterSocialMediaContent />
        <FooterBottomMenu />
        <FooterContactMe />
      </div>
      <div>
        <RightReserved />
      </div>
    </div>
  );
}
