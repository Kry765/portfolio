import type { ButtonData } from "../../types/Header";

type Props = {
  buttonData: ButtonData[];
};

export default function HeaderButton({ buttonData }: Props) {
  return buttonData.map((data, index) => {
    <div key={index}>
      <button>{data.buttonContact}</button>
    </div>;
  });
}
