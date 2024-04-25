import { FooterSocialMediaContent } from "./FooterSocialMediaContent";
import { FooterContactMe } from "./FooterContactMe";
import { FooterBottomMenu } from "./FooterBottomMenu";
import { RightReserved } from "./RightReserved";

export default function Footer() {
  return (
    <div className="bg-[#176b87] text-white" id="contact">
      <div className="flex justify-around mx-24 pt-12 md:flex-col">
        <FooterSocialMediaContent />
        <FooterBottomMenu />
        <FooterContactMe />
      </div>
      <>
        <RightReserved />
      </>
    </div>
  );
}
