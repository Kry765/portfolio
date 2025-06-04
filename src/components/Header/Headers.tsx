import headerData from "../../data/headerData.json";
import type { HeaderEntry } from "../../types/Header.ts";
import HeaderButton from "./HeaderButton.tsx";
import HeaderIconSocial from "./HeaderIconSocial.tsx";
import HeaderDescription from "./HeaderDescription.tsx";

const typeData = headerData as HeaderEntry;
const description = typeData.headerDescriptionData[0];

export default function Headers() {
  const letterSpacer = "py-4 px-8 md:mr-4";

  return (
    <header className="bg-[url(../assets/wallpaper/wallpaper_lg.jpg)] bg-cover bg-center bg-no-repeat flex flex-row items-center justify-center text-white w-full h-[100vh]">
      <section className="relative flex justify-center items-start h-[100vh] w-full flex-col ">
        <div className="absolute bg-black opacity-50 w-full h-[100vh]"></div>
        <div className="text-center md:text-left z-4 p-3 md:p-24 animate-fade-right animate-once animate-duration-[800ms] animate-delay-0 animate-ease-linear animate-alternate animate-fill-both">
          <HeaderDescription
            headerDescriptionData={description}
            className={letterSpacer}
          />

          <HeaderButton headerButtonData={typeData.headerButtonData} />
          <HeaderIconSocial
            className={`${letterSpacer} text-xl`}
            hoverClassname="hover:text-[#0F6D95] transition-colors duration-300"
            socialIconLink={typeData.headerIconSocialLink}
          />
        </div>
      </section>
    </header>
  );
}
