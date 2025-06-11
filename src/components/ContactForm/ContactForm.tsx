import ContactInput from "./ContactInput";
import ContactLabel from "./ContactLabel";

export default function ContactForm() {
  const styleInput =
    "block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6";

  return (
    <div className="w-full py-8 md:p-12">
      <h3 className="text-xl font-bold mb-8 md:text-left text-center">
        Wyślij wiadomość
      </h3>
      <form action="" className="flex flex-col">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <ContactLabel>Imię</ContactLabel>
            <div className="mt-2">
              <ContactInput />
              <ContactLabel>Telefon</ContactLabel>
              <ContactInput />
              <ContactLabel>E-mail</ContactLabel>
              <ContactInput />
              <ContactLabel>Wiadomość</ContactLabel>
              <div className="mt-2">
                <textarea
                  name="about"
                  id="about"
                  className={styleInput}
                ></textarea>
              </div>
              <button className="py-2 my-4 md:mr-auto cursor-pointer w-full rounded-md z-4 bg-[#0F6D95] text-white radius-[12px] px-14 transition-bg duration-300">
                Wyślij
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
