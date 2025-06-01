type Props = {
  title: string;
  lang: string[];
};

export default function AboutMeLanguage({ lang, title }: Props) {
  return (
    <>
      <h2 className="py-2 md:px-6 font-bold text-2xl">{title}</h2>
      {lang.map((item, index) => (
        <div key={index}>
          <p>
            {item.language} - {item.level}
          </p>
          <div className="relative w-[100%] radius-1 h-[20px] bg-gray-300 rounded-md">
            <div
              className={`absolute radius-1 h-[20px] bg-blue-300 rounded-md`}
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
