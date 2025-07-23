import type { HeaderDescriptionData } from "../../types/Header.ts";

type Props = {
  headerDescriptionData: HeaderDescriptionData;
  className: string;
  titleClass: string;
  paragraphClass: string;
  descriptionClass: string;
};

export default function HeaderDescription({
  headerDescriptionData,
  titleClass,
  paragraphClass,
  descriptionClass,
  className = "",
}: Props) {
  return (
    <div className={className}>
      <h1 className={titleClass}>{headerDescriptionData.title}</h1>
      <p className={paragraphClass}>{headerDescriptionData.specialization}</p>
      <p className={descriptionClass}>{headerDescriptionData.description}</p>
    </div>
  );
}
