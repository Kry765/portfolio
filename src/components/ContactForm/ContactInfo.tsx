import type { PersonalyData } from "../../types/PersonalyData";
import IconWrapper from "../../shared/IconWrapper";

type Props = {
  data: PersonalyData;
};

export default function ContactInfo({ data }: Props) {
  const { personaly, address, social } = data;

  return (
    <div>
      <h3 className="text-xl text-[#0F6D95] font-bold my-8 text-center md:text-left">
        Kontakt
      </h3>
      <p className="mb-6 text-center md:text-left">
        Masz pytania, sugestie lub chcesz rozpocząć współpracę? Wypełnij
        formularz obok, lub skontaktuj sie bezpośrednio korzystając z poniższych
        danych.
      </p>
      {personaly.map((item, index) => (
        <div key={index} className="mb-4 flex items-center  w-full">
          <IconWrapper
            name={item.icon}
            size={"1x"}
            className="bg-[#0F6D95] text-white rounded-full mr-4 w-6 h-6 flex items-center justify-center"
          />
          <div>
            <p className="text-sm font-bold break-words">{item.title}</p>
            <p className="text-sm break-words">{item.label}</p>
          </div>
        </div>
      ))}
      {address.map((item, index) => (
        <div key={index} className="mb-6 flex items-centerw-full ">
          <IconWrapper
            name={item.icon}
            size={"1x"}
            className="bg-[#0F6D95] text-white rounded-full mr-4 w-6 h-6 flex items-center justify-center"
          />
          <div>
            <p className="text-sm break-words font-bold">{item.title}</p>
            <p className="text-sm break-words">
              {item.street}, {item.postcode} {item.city}
            </p>
          </div>
        </div>
      ))}

      <h3 className="text-xl font-bold mb-4 text-center md:text-left">
        Możesz również skontaktować się tutaj
      </h3>
      <div className="flex justify-center md:justify-start">
        {social.map((item, index) => (
          <a href={item.link} key={index}>
            <IconWrapper
              name={item.icon}
              size="xl"
              className=" my-2 hover:text-[#0F6D95] hover:cursor-pointer transition-text duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
