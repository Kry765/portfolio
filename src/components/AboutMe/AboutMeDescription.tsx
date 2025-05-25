type Props = {
  title: string;
  description: string[];
};

export default function AboutMeDescription({ title, description }: Props) {
  return (
    <>
      <h2 className="py-2 px-6 font-bold text-2xl">{title}</h2>
      {description.map((data, index) => (
        <p key={index} className="py-2 md:px-6">
          {data}
        </p>
      ))}
    </>
  );
}
