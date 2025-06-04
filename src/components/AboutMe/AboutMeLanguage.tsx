import type { LangEntry } from "../../types/Aboutme";

type Props = {
  title: string;
  language: LangEntry[];
};

export default function AboutMeLanguage({ language, title }: Props) {
  return (
    <div className="mx-auto w-full-md flex flex-col ">
      <div className="w-full max-w-md mx-auto">
        <h2 className="py-4 font-bold text-2xl text-[#0F6D95]">{title}</h2>
        {language.map((item, index) => (
          <div>
            <p key={index} className="text-[#1A1A40]">
              {item.language} - {item.level}
            </p>
            <div className="relative w-[100%] my-2 radius-1 h-[20px] bg-gray-300 rounded-md">
              <div
                className={`absolute radius-1 h-[20px] bg-[#0F6D95] rounded-md`}
                style={{ width: item.status }}
              ></div>
            </div>
            <div className="flex justify-end">
              <p>{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
