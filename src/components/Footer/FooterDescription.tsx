import IconWrapper from "../../shared/IconWrapper";
import type { PersonalyData } from "../../types/PersonalyData";

type Props = {
  data: PersonalyData;
};

export default function FooterDescription({ data }: Props) {
  const { social } = data;
  return (
    <div className="px-8 py-6 w-full md:w-[40%] text-center md:text-left">
      <h3 className="py-2">Krzysztof Klęka</h3>
      <p className="px-auto">{aboutmeDescription}</p>
      {social.map((item, index) => (
        <IconWrapper key={index} name={item.icon} size={"1x"} />
      ))}
    </div>
  );
}
