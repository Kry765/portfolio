import type { HeaderDescriptionData } from "../../types/Header.ts";

type Props = {
  headerDescriptionData: HeaderDescriptionData;
  className: string;
};

export default function HeaderDescription({
  headerDescriptionData,
  className = "",
}: Props) {
  return (
    <div className={className}>
      <h1 className="text-2xl font-bold">{headerDescriptionData.title}</h1>
      <p className="text-xl z-4 text-[#0F6D95] font-bold uppercase mt-2">
        {headerDescriptionData.specialization}
      </p>
      <p className="z-4 mt-4">{headerDescriptionData.description}</p>
    </div>
  );
}
