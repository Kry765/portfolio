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
}

export const ListItem = ({
  className = "",
  liClassName = "",
  linkClassName = "",
  title,
  isLink,
  items,
}: ListSectionProps) => {
  return (
    <>
      <ul className={className}>
        <h3 className="font-bold py-2">{title}</h3>
        {items.map((item) => (
          <li key={item.key} className={`list-none py-2 ${liClassName}`}>
            {isLink ? (
              <a
                href={item.href}
                className={`${linkClassName}cursor-pointer hover:text-[#0F6D95] transition-color duration-350`}
              >
                {item.label}
              </a>
            ) : (
              <p>{item.label}</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
