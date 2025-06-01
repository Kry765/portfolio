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
          <p>{item.status}</p>
        </div>
      ))}
    </>
  );
}
