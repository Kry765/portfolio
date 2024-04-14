import { HeaderDescription } from "./HeaderDescription";
import { HeaderImage } from "./HeaderImage";

export default function Header() {
  return (
    <div className="flex flex-row">
      <HeaderDescription />
      <HeaderImage />
    </div>
  );
}
