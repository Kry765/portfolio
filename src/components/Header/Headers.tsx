import headerData from "../../data/headerData.json";
import type { HeaderEntry } from "../../types/Header.ts";
import HeaderButton from "./HeaderButton.tsx";
import HeaderIconSocial from "./HeaderIconSocial.tsx";
import HeaderDescription from "./HeaderDescription.tsx";

const typeData = headerData as HeaderEntry;
const description = typeData.headerDescriptionData[0];

export default function Headers() {
  return (
    <header className="relative w-full h-screen bg-[url(../assets/wallpaper/wallpaper_lg.jpg)] bg-cover bg-center bg-no-repeat text-white overflow-hidden before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <section className="relative z-20 flex flex-col items-start w-full h-full px-4 md:px-24">
        <div
          className="relative text-center md:text-left max-w-screen-md w-full animate-fade-right p-4 md:p-12
                 flex flex-col justify-center h-full"
        >
          <HeaderDescription
            headerDescriptionData={description}
            className="py-4 px-4 md:px-8"
          />
          <HeaderButton headerButtonData={typeData.headerButtonData} />
          <HeaderIconSocial
            className="py-4 px-4 text-xl"
            hoverClassname="hover:text-[#0F6D95] transition-colors duration-300"
            socialIconLink={typeData.headerIconSocialLink}
          />
        </div>
      </section>
    </header>
  );
}
