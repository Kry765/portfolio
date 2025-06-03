import type { HeaderButtonData } from "../../types/Header";

type Props = {
  className: string;
  headerButtonData: HeaderButtonData[];
};

export default function HeaderButton({ headerButtonData, className }: Props) {
  return (
    <div className="flex sm:flex-wrap md:flex-row sm:flex-col">
      {headerButtonData.map((data, index) => (
        <div key={index} className={`${className} my-4`}>
          <button className="py-2 cursor-pointer">{data.buttonLabel}</button>
        </div>
      ))}
    </div>
  );
}
