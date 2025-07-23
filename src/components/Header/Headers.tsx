import headerData from "../../data/headerData.json";
import type { HeaderEntry } from "../../types/Header.ts";
import HeaderButton from "./HeaderButton.tsx";
import HeaderIconSocial from "./HeaderIconSocial.tsx";
import HeaderDescription from "./HeaderDescription.tsx";

const typeData = headerData as HeaderEntry;
const description = typeData.headerDescriptionData[0];

const headerSpacer = "py-4 px-4";

export default function Headers() {
  return (
    <section
      className="h-screen flex flex-col items-center text-center justify-center"
      data-aos="fade-right"
    >
      <HeaderDescription
        headerDescriptionData={description}
        className={`${headerSpacer} md:px-8`}
        paragraphClass="text-4xl mt-2 text-purple-700 font-bold uppercase"
        titleClass="text-base"
        descriptionClass="text-base mt-2"
      />
      <HeaderButton headerButtonData={typeData.headerButtonData} />
      <HeaderIconSocial
        className={`${headerSpacer} text-xl`}
        socialIconLink={typeData.headerIconSocialLink}
        hoverClassname="hover:text-purple-500 transition-colors duration-300"
      />
    </section>
  );
}
