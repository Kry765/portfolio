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
      <h1 className="text-base">{headerDescriptionData.title}</h1>
      <p className="text-4xl z-4 text-purple-700 font-bold uppercase mt-2">
        {headerDescriptionData.specialization}
      </p>
      <p className="z-4 mt-4 text-base">{headerDescriptionData.description}</p>
    </div>
  );
}
