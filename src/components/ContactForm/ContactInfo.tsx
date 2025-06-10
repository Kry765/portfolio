import type { PersonalyData } from "../../types/PersonalyData";
import IconWrapper from "../../shared/IconWrapper";

type Props = {
  data: PersonalyData;
};

export default function ContactInfo({ data }: Props) {
  const { personaly, address, social } = data;

  return (
    <div className="p-14">
      <h3 className="text-xl font-bold pb-8">Kontakt</h3>
      {personaly.map((item, index) => (
        <div key={index} className="mb-4 flex items-center">
          <IconWrapper name={item.icon} size={"1x"} />
          <p>{item.label}</p>
        </div>
      ))}
      {address.map((item, index) => (
        <div key={index} className="mt-4 flex items-center">
          <IconWrapper name={item.icon} size={"1x"} />
          <p>
            {item.street}, {item.postcode} {item.city}
          </p>
        </div>
      ))}

      <h3 className="text-xl font-bold py-8">
        Możesz również skontaktować się tutaj
      </h3>
      {social.map((item, index) => (
        <a href={item.link} key={index}>
          <IconWrapper name={item.icon} size="1x" />
        </a>
      ))}
    </div>
  );
}
