import { HeaderDescription } from "./HeaderDescription";
import { HeaderPhoto } from "./HeaderPhoto";

export default function Header() {
  return (
    <header id="home">
      <div className="flex justify-center">
        <HeaderDescription />
        <HeaderPhoto />
      </div>
    </header>
  );
}
