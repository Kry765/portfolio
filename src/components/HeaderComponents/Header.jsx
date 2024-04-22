import { HeaderDescription } from "./HeaderDescription";
import { HeaderImage } from "./HeaderImage";

export default function Header() {
  return (
    <header className="flex flex-row" id="home">
      <HeaderDescription />
      <HeaderImage />
    </header>
  );
}
