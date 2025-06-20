import type { HeaderButtonData } from "../../types/Header";
import { Link as ScrollLink } from "react-scroll";

type Props = {
  headerButtonData: HeaderButtonData[];
};

const styleButton: string =
  "hover:bg-purple-500 rounded-md py-2 px-14 duration-300 transition-bg";

export default function HeaderButton({ headerButtonData }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {headerButtonData.map((data, index) => {
        const isPDF = data.link.endsWith(".pdf");

        return (
          <div key={index} className="py-4 duration-300">
            {isPDF ? (
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styleButton} bg-purple-800`}
              >
                {data.buttonLabel}
              </a>
            ) : (
              <ScrollLink
                to={data.link}
                smooth={true}
                duration={500}
                offset={-70}
                className={`${styleButton} cursor-pointer border hover:border-purple-500`}
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
