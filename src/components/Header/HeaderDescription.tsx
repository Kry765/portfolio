import type { HeaderDescriptionData } from "../../types/Header.ts";

type Props = {
  headerDescriptionData: HeaderDescriptionData;
  className: string;
};

export default function headerDescription({
  headerDescriptionData,
  className,
}: Props) {
  return (
    <div>
      <h1 className={`${className} text-4xl font-bold`}>
        {headerDescriptionData.title}
      </h1>
      <p
        className={`${className} text-2xl z-4 text-[#0F6D95] font-bold uppercase`}
      >
        {headerDescriptionData.specialization}
      </p>
      <p className={`${className} z-4`}>{headerDescriptionData.description}</p>
    </div>
  );
}
