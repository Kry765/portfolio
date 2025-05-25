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
      <h2 className="py-2 px-6 font-bold text-2xl">{schoolSectionTitle}</h2>
      {schoolData.map((data, index) => (
        <div key={index}>
          <div>
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div>
            <p className="py-2 md:px-6">{data.years}</p>
            <p className="py-2 md:px-6">{data.label}</p>
          </div>
        </div>
      ))}
    </>
  );
}
