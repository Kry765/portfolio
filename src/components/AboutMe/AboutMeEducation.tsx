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
    <div className="flex flex-col items-center md:items-start w-full max-w-md gap-4 mb-6">
      <h2 className="p-6 font-bold text-2xl text-[#0F6D95]">
        {schoolSectionTitle}
      </h2>
      {schoolData.map((data, index) => (
        <div
          key={index}
          className="md:pl-6 pl-[-80px] flex items-center text-[#1A1A40]"
        >
          <div className="md:block hidden mt-1 pr-4">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-lg text-[#1A1A40]"
            />
          </div>
          <div>
            <p className="font-medium text-[#1A1A40]">{data.years}</p>
            <p className="text-[#1A1A40]">{data.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
