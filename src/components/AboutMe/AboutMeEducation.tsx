import IconWrapper from "../../shared/IconWrapper";

type Props = {
  schoolSectionTitle: string;
  schoolData: {
    years: string;
    label: string;
  }[];
};

export default function AboutMeEducation({
  schoolSectionTitle,
  schoolData,
}: Props) {
  return (
    <div className="flex flex-col items-center md:items-start max-w-md gap-4 mb-6">
      <h2 className="p-6 font-bold text-2xl">{schoolSectionTitle}</h2>
      {schoolData.map((data, index) => (
        <div key={index} className="md:pl-6 pl-[-80px] flex items-center">
          <div className="md:block hidden mt-1 pr-4">
            <IconWrapper name="graduationCap" size="lg" />
          </div>
          <div>
            <p className="font-bold">{data.years}</p>
            <p className="font-light">{data.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
