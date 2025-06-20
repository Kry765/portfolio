type Props = {
  title: string;
  description: string[];
};

export default function AboutMeDescription({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center md:items-start pt-10 max-w-md gap-4 mb-6">
      <h2 className="text-2xl font-bold  w-full px-6">{title}</h2>
      {description.map((data, index) => (
        <p key={index} className="font-light py-2 md:px-6">
          {data}
        </p>
      ))}
    </div>
  );
}
