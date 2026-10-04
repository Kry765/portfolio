import { EducationDataItem } from "@/app/data/educationData";

export default function EducationEntry({ period, school }: EducationDataItem) {
  return (
    <>
      <dt>{period}</dt>
      <dd>{school}</dd>
    </>
  );
}
