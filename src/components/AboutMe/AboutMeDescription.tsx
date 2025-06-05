type Props = {
  title: string;
  description: string[];
};

export default function AboutMeDescription({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center md:items-start w-full max-w-md gap-4 mb-6">
      <h2 className="py-2 px-6 font-bold text-2xl text-[#0F6D95]">{title}</h2>
      {description.map((data, index) => (
        <p key={index} className="py-2 md:px-6 text-[#1A1A40]">
          {data}
        </p>
      ))}
    </div>
  );
}
