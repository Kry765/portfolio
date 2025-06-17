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
    <section className="h-screen flex flex-col items-center text-center justify-center">
      <HeaderDescription
        headerDescriptionData={description}
        className={`${headerSpacer} md:px-8`}
      />
      <HeaderButton headerButtonData={typeData.headerButtonData} />
      <HeaderIconSocial
        className={`${headerSpacer} text-xl`}
        hoverClassname="hover:text-purple-700 transition-colors duration-300"
        socialIconLink={typeData.headerIconSocialLink}
      />
    </section>
  );
}
