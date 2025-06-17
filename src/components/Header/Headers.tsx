import headerData from "../../data/headerData.json";
import type { HeaderEntry } from "../../types/Header.ts";
import HeaderButton from "./HeaderButton.tsx";
import HeaderIconSocial from "./HeaderIconSocial.tsx";
import HeaderDescription from "./HeaderDescription.tsx";

const typeData = headerData as HeaderEntry;
const description = typeData.headerDescriptionData[0];

const padding = "py-4 px-4";

export default function Headers() {
  return (
    <section className="h-screen flex flex-col text-center justify-center items-center w-full h-full">
      <HeaderDescription
        headerDescriptionData={description}
        className="py-4 px-4 md:px-8"
      />
      <HeaderButton headerButtonData={typeData.headerButtonData} />
      <HeaderIconSocial
        className="py-4 px-4 text-xl"
        hoverClassname="hover:text-purple-700 transition-colors duration-300"
        socialIconLink={typeData.headerIconSocialLink}
      />
    </section>
  );
}
