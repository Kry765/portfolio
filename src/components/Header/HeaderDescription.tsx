import type { HeaderDescriptionData } from "../../types/Header.ts";

type Props = {
  headerDescriptionData: HeaderDescriptionData;
  className?: string; // zrób opcjonalne, na wszelki wypadek
};

export default function HeaderDescription({
  headerDescriptionData,
  className = "",
}: Props) {
  return (
    <div className={className}>
      <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-4xl font-bold">
        {headerDescriptionData.title}
      </h1>
      <p className="text-xl sm:text-xl md:text-3xl lg:text-4xl z-4 text-[#0F6D95] font-bold uppercase mt-2">
        {headerDescriptionData.specialization}
      </p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl z-4 mt-4">
        {headerDescriptionData.description}
      </p>
    </div>
  );
}
