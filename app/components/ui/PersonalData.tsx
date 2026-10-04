import { personalDataItem } from "@/app/data/personalDataItems";

export default function PersonalData({ label, value, href }: personalDataItem) {
  return (
    <>
      <dt>{label}</dt>
      <dd>{href ? <a href="href">{value}</a> : value}</dd>
    </>
  );
}
