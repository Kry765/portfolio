import type { HeaderButtonData } from "../../types/Header";

type Props = {
  className: string;
  headerButtonData: HeaderButtonData[];
};

export default function HeaderButton({ headerButtonData, className }: Props) {
  return (
    <div className="flex my-2">
      {headerButtonData.map((data, index) => (
        <div key={index} className={className}>
          <button>{data.buttonLabel}</button>
        </div>
      ))}
    </div>
  );
}
