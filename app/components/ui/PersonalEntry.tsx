import { PersonalDataItem } from "@/app/data/personalData";

export default function PersonalEntry({
  label,
  value,
  href,
}: PersonalDataItem) {
  return (
    <>
      <dt>{label}</dt>
      <dd>{href ? <a href={href}>{value}</a> : value}</dd>
    </>
  );
}
