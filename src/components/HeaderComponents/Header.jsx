import { HeaderDescription } from "./HeaderDescription";
import { HeaderImage } from "./HeaderImage";

export default function Header() {
  return (
    <div className="flex flex-row" id="home">
      <HeaderDescription />
      <HeaderImage />
    </div>
  );
}
