import IconWrapper, { iconMap } from "../../hook/iconWrapper";

type SocialIconLinkItem = {
  key: string;
  icon: string;
  link: string;
};

type Props = {
  className: string;
  hoverClassname: string;
  socialIconLink: SocialIconLinkItem[];
};

export default function HeaderIconSocial({
  className,
  socialIconLink,
  hoverClassname,
}: Props) {
  return (
    <div className={className}>
      {socialIconLink.map((data) => {
        const iconName = data.icon as keyof typeof iconMap;

        return (
          <a
            href={data.link}
            className={hoverClassname}
            key={data.key}
            rel="noopener noreferrer"
          >
            <IconWrapper name={iconName} size="1x" />
          </a>
        );
      })}
    </div>
  );
}
