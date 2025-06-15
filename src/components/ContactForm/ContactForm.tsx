import ContactInput from "./ContactInput";
import ContactLabel from "./ContactLabel";

export default function ContactForm() {
  const styleInput =
    "block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6";

  return (
    <div className="w-full pt-8 pb-12">
      <h3 className="text-xl text-[#0F6D95] font-bold mb-6 md:text-left text-center">
        Wyślij wiadomość
      </h3>
      <form action="" className="flex flex-col">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <ContactLabel>Imię</ContactLabel>
            <div className="mt-2">
              <ContactInput placeholder="Podaj imię" />
              <ContactLabel>Telefon</ContactLabel>
              <ContactInput placeholder="Podaj adres E-mail" />
              <ContactLabel>E-mail</ContactLabel>
              <ContactInput placeholder="Podaj numer telefonu" />
              <ContactLabel>Wiadomość</ContactLabel>
              <div className="mt-2">
                <textarea
                  name="about"
                  id="about"
                  placeholder="Napisz wiadomość"
                  className={styleInput}
                ></textarea>
              </div>
              <button className="py-2 mt-4 w-full rounded-md bg-[#0F6D95] text-white px-14 transition duration-300">
                Wyślij
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
