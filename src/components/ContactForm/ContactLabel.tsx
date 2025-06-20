type Props = {
  children: string;
};

export default function ContactLabel({ children }: Props) {
  const styleLabel = "block text-sm/6 pt-4 font-medium";

  return <label className={styleLabel}>{children}</label>;
}
