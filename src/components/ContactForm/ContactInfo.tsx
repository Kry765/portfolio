import type { PersonalyData } from "../../types/PersonallyData";
import IconWrapper from "../../hook/iconWrapper";

type Props = {
  data: PersonalyData;
};

export default function ContactInfo({ data }: Props) {
  const { personaly, address } = data;

  return (
    <div className="p-12 bg-[#0F6D95] text-white">
      <h3 className="text-xl font-bold mb-4">Masz pytania? Napisz do nas</h3>{" "}
      {personaly.map((item, index) => (
        <div key={index} className="mb-2 flex items-center">
          <IconWrapper name={item.icon} size={"2x"} />
          <p>{item.label}</p>
        </div>
      ))}
      {address.map((item, index) => (
        <div key={index} className="mt-4 flex items-center">
          <IconWrapper name={item.icon} size={"2x"} />
          <p>
            {item.street} {item.postcode} {item.city}
          </p>
        </div>
      ))}
    </div>
  );
}
