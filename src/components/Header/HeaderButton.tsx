import type { HeaderButtonData } from "../../types/Header";
import { Link as ScrollLink } from "react-scroll";

type Props = {
  headerButtonData: HeaderButtonData[];
};

export default function HeaderButton({ headerButtonData }: Props) {
  return (
    <div className="flex px-8 sm:flex-wrap md:flex-row flex-col">
      {headerButtonData.map((data, index) => {
        const isPDF = data.link.endsWith(".pdf");

        return (
          <div key={index} className="py-4">
            {isPDF ? (
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 md:mr-4 cursor-pointer rounded-md z-4 border hover:bg-[#0F6D95] hover:border-[#0F6D95] bg-none radius-[12px] px-14 transition-border duration-300"
              >
                {data.buttonLabel}
              </a>
            ) : (
              <ScrollLink
                to={data.link}
                smooth={true}
                duration={500}
                offset={-70}
                className="py-2 md:mr-4 cursor-pointer rounded-md z-4 border hover:bg-[#0F6D95] hover:border-[#0F6D95] bg-none radius-[12px] px-14 transition-border duration-300"
              >
                {data.buttonLabel}
              </ScrollLink>
            )}
          </div>
        );
      })}
    </div>
  );
}
