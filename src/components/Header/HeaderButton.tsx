import type { ButtonData } from "../../types/Header";

type Props = {
  className: string;
  buttonData: ButtonData[];
};

export default function HeaderButton({ buttonData, className }: Props) {
  return (
    <div className="flex my-2">
      {buttonData.map((data, index) => (
        <div key={index} className={className}>
          <button>{data.buttonLabel}</button>
        </div>
      ))}
    </div>
  );
}
