import { educationDataItems } from "@/app/data/educationData";

export default function EducationData({ period, school }: educationDataItems) {
  return (
    <>
      <dt>{period}</dt>
      <dd>{school}</dd>
    </>
  );
}
