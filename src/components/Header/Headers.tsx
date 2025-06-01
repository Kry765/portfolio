import headerData from "../../data/headerData.json";
import type { HeaderEntry } from "../../types/Header.ts";
import HeaderButton from "./HeaderButton.tsx";

const typeData = headerData as HeaderEntry;

export default function Headers() {
  return (
    <header
      className="bg-[url(../assets/wallpaper/wallpaper_lg.jpg)] bg-cover bg-center
 bg-no-repeat flex flex-row items-center justify-center
 text-white w-full h-[100vh]"
    >
      <section className="flex justify-center items-center h-[100vh] w-[60%] flex-col ">
        <div className="absolute bg-black opacity-50 w-full h-[100vh]"></div>
        <h1 className="my-4 text-4xl text-center font-bold z-4">
          Hello, I'm Krzysztof Klęka
        </h1>
        <p className="my-4 text-2xl z-4 font-bold uppercase">Web Developer</p>

        <HeaderButton
          className="rounded-md z-4 border hover bg-none radius-[12px] py-2 px-14 cursor-pointer"
          buttonData={typeData.buttonData}
        />
      </section>
    </header>
  );
}
