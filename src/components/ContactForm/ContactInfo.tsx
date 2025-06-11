import type { PersonalyData } from "../../types/PersonalyData";
import IconWrapper from "../../shared/IconWrapper";

type Props = {
  data: PersonalyData;
};

export default function ContactInfo({ data }: Props) {
  const { personaly, address, social } = data;

  return (
    <div className="md:p-14">
      <h3 className="text-xl font-bold py-8 text-center md:text-left">
        Kontakt
      </h3>
      {personaly.map((item, index) => (
        <div key={index} className="pb-8 flex items-center w-full">
          <IconWrapper
            name={item.icon}
            size={"1x"}
            className="bg-[#0F6D95] text-white rounded-full mr-4 w-6 h-6 flex items-center justify-center"
          />
          <p className="text-sm break-words">{item.label}</p>
        </div>
      ))}
      {address.map((item, index) => (
        <div key={index} className="mb-12 flex items-center">
          <IconWrapper
            name={item.icon}
            size={"1x"}
            className="bg-[#0F6D95] text-white rounded-full mr-4 w-6 h-6 flex items-center justify-center"
          />
          <p className="text-sm break-words">
            {item.street}, {item.postcode} {item.city}
          </p>
        </div>
      ))}

      <h3 className="text-xl font-bold py-8 text-center md:text-left">
        Możesz również skontaktować się tutaj
      </h3>
      {social.map((item, index) => (
        <a href={item.link} key={index}>
          <IconWrapper
            name={item.icon}
            size="1x"
            className="bg-[#0F6D95] text-white rounded-[50%] mr-4 my-2"
          />
        </a>
      ))}
    </div>
  );
}
