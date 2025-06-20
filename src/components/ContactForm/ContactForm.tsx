import ContactInput from "./ContactInput";
import ContactLabel from "./ContactLabel";

export default function ContactForm() {
  const styleInput =
    "block w-full rounded-md px-3 py-2 text-base outline-1 md:bg-zinc-950 rounded-lg -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-900 sm:text-sm/6";

  return (
    <div className="w-full pt-8 pb-12">
      <h3 className="text-xl font-bold mb-6 md:text-left text-center">
        Wyślij wiadomość
      </h3>
      <form className="flex flex-col">
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
                  className={`${styleInput} placeholder:text-white`}
                ></textarea>
              </div>
              <button className="py-2 mt-4 w-full rounded-md bg-purple-900 font-bold text-white px-14 hover:cursor-pointer transition duration-300">
                Wyślij
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
