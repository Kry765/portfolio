import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  MdEmail,
  FaPhone,
  FaLocationDot,
} from "../Icon";

const Icon = [<FaFacebook />, <FaInstagram />, <FaLinkedin />, <FaGithub />];
const BottomMenu = ["About Me", "Skills", "Project", "Contact"];
const ContactIcon = [
  {
    icon: <MdEmail />,
    descriptionIcon: "krzysztofkleka91@gmail.com",
  },
  {
    icon: <FaPhone />,
    descriptionIcon: "573 226 219",
  },
  {
    icon: <FaLocationDot />,
    descriptionIcon: "Żywiec, Poland",
  },
];

const FooterContent = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <p className="font-bold text-xl">Kry765</p>
        <p className="mt-3">
          Interested in working together? You can find me below
        </p>
        <div className="flex flex-wrap">
          {Icon.map((icon, index) => (
            <div key={index} className="m-5 p-2">
              <p className="my-3">{icon}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <p className="font-bold text-xl flex-wrap">Menu</p>
        {BottomMenu.map((menuItem, index) => (
          <div key={index}>
            <p className="mt-3">{menuItem}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterContactMe = () => {
  return (
    <div>
      <h3 className="text-xl mx-4 font-bold">Contact Me</h3>
      {ContactIcon.map((contact, index) => (
        <div key={index} className="flex">
          <div className="mx-4 my-2">{contact.icon}</div>
          <div className="my-1">{contact.descriptionIcon}</div>
        </div>
      ))}
    </div>
  );
};

export default function Footer() {
  return (
    <div className="flex flex-col bg-[#176b87] text-white">
      <div className="flex flex-row justify-center pt-12 w-full h-1/2 ">
        <div className="flex w-3/4">
          <FooterContent />
          <FooterContactMe />
        </div>
      </div>
      <p className="text-right my-3 mx-5">
        Kry765 | 2024 &copy;All right reserved
      </p>
    </div>
  );
}
