type Props = {
  placeholder: string;
};

export default function ContactInput({ placeholder }: Props) {
  const styleInput =
    "block w-full rounded-md px-3 py-2 text-base outline-1 -outline-offset-1  placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-purple-900 sm:text-sm/6";

  return (
    <input
      type="text"
      name="first-name"
      id="first-name"
      placeholder={placeholder}
      className={styleInput}
    />
  );
}
