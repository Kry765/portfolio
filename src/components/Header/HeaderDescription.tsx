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
      <p className="text-4xl mt-2 text-purple-700 font-bold uppercase ">
        {headerDescriptionData.specialization}
      </p>
      <p className="text-base mt-2">{headerDescriptionData.description}</p>
    </div>
  );
}
