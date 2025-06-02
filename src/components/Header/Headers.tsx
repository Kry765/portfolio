import headerData from "../../data/headerData.json";
import type { HeaderEntry } from "../../types/Header.ts";
import HeaderButton from "./HeaderButton.tsx";
import HeaderIconSocial from "./HeaderIconSocial.tsx";

const typeData = headerData as HeaderEntry;

export default function Headers() {
  return (
    <header
      className="bg-[url(../assets/wallpaper/wallpaper_lg.jpg)] bg-cover bg-center
 bg-no-repeat flex flex-row items-center justify-center
 text-white w-full h-[100vh]"
    >
      <section className="relative flex justify-center items-start h-[100vh] w-full flex-col ">
        <div className="absolute bg-black opacity-50 w-full h-[100vh]"></div>
        <div className="z-4 p-24">
          <h1 className="my-4 text-4xl font-bold">
            {typeData.headerData[0].title}
          </h1>
          <p className="my-4 text-2xl z-4 font-bold uppercase">
            {typeData.headerData[0].specialization}
          </p>
          <p className="z-4">{typeData.headerData[0].description}</p>

          <HeaderButton
            className="rounded-md z-4 border hover bg-none radius-[12px] mx-2 py-2 px-14 cursor-pointer"
            buttonData={typeData.buttonData}
          />
          <HeaderIconSocial
            className="py-4 mr-4 text-xl"
            socialIconLink={typeData.socialIconLink}
          />
        </div>
      </section>
    </header>
  );
}
