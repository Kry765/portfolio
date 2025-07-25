import { Link as ScrollLink } from "react-scroll";

interface listItems {
  key: string;
  label: string;
  href?: string;
}

interface ListSectionProps {
  title?: string;
  items: listItems[];
  isLink?: boolean;
  className?: string;
  liClassName?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
}

export const ListMenu = ({
  className = "",
  liClassName = "",
  linkClassName = "",
  title,
  isLink,
  onLinkClick,
  items,
}: ListSectionProps) => {
  return (
    <>
      <ul className={className}>
        <h3 className="font-bold py-2">{title}</h3>
        {items.map((item) => (
          <li key={item.key} className={`list-none py-2 ${liClassName}`}>
            {isLink && item.href ? (
              <ScrollLink
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={onLinkClick}
                className={`${linkClassName}cursor-pointer hover:text-purple-500 transition-color duration-350`}
              >
                {item.label}
              </ScrollLink>
            ) : (
              <p>{item.label}</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
