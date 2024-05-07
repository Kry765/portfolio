import { FooterSocialMediaContent } from "./FooterSocialMediaContent";
import { FooterContactMe } from "./FooterContactMe";
import { FooterBottomMenu } from "./FooterBottomMenu";
import { RightReserved } from "./RightReserved";

export default function Footer() {
  return (
    <>
      <div id="contact" className="flex justify-around mx-24 pt-12 md:flex-col">
        <FooterSocialMediaContent />
        <FooterBottomMenu />
        <FooterContactMe />
      </div>
      <>
        <RightReserved />
      </>
    </>
  );
}
