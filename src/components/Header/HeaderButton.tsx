import type { HeaderButtonData } from "../../types/Header";

type Props = {
  headerButtonData: HeaderButtonData[];
};

export default function HeaderButton({ headerButtonData }: Props) {
  return (
    <div className="flex px-8  sm:flex-wrap md:flex-row flex-col">
      {headerButtonData.map((data, index) => (
        <div key={index} className={`py-4`}>
          <button className="py-2 md:mr-4 cursor-pointer rounded-md z-4 border hover:bg-[#0F6D95] hover:border-[#0F6D95] bg-none radius-[12px] px-14 transition-border duration-300">
            {data.buttonLabel}
          </button>
        </div>
      ))}
    </div>
  );
}
