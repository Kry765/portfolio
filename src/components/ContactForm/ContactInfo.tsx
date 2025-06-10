import type { PersonalyData } from "../../types/PersonallyData";

type Props = {
  data: PersonalyData;
};

export default function ContactInfo({ data }: Props) {
  const { personaly, address } = data;

  return (
    <div className="px-24">
      <h3 className="text-xl font-bold mb-4">Kontakt</h3>

      {personaly.map((item) => (
        <div key={item.key} className="mb-2">
          <p className="font-semibold capitalize">{item.key}:</p>
          <p>{item.label}</p>
        </div>
      ))}

      {address.map((item, index) => (
        <div key={index} className="mt-4">
          <p className="font-semibold">Adres:</p>
          <p>
            {item.postcode} {item.city}
          </p>
          <p>{item.street}</p>
        </div>
      ))}
    </div>
  );
}
