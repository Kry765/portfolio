import type { LangEntry } from "../../types/Aboutme";

type Props = {
  title: string;
  language: LangEntry[];
};

export default function AboutMeLanguage({ language, title }: Props) {
  return (
    <>
      <h2 className="text-2xl py-4 my-6 font-bold text-center md:text-left">
        {title}
      </h2>
      {language.map((item, index) => (
        <div>
          <p key={index}>
            {item.language} - {item.level}
          </p>
          <div className="relative my-2 rounded-xl h-[20px] bg-gray-300 rounded-md">
            <div
              className={`absolute rounded-xl h-[20px] bg-purple-800 rounded-md`}
              style={{ width: item.status }}
            ></div>
          </div>
          <div className="flex justify-end">
            <p>{item.status}</p>
          </div>
        </div>
      ))}
    </>
  );
}
