import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

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
    <>
      <h2 className="p-6 font-bold text-2xl gap-4">{schoolSectionTitle}</h2>
      {schoolData.map((data, index) => (
        <div className="flex items-start gap-4 mb-6" key={index}>
          <div className="shrink-0 mt-0.5">
            <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
          </div>
          <div>
            <p className="font-medium">{data.years}</p>
            <p>{data.label}</p>
          </div>
        </div>
      ))}
    </>
  );
}
