export default function ContactForm() {
  const styleInput =
    "block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6";
  const styleLabel = "block text-sm/6 pt-4 font-medium text-gray-900";

  return (
    <div className="w-full py-8 md:p-12">
      <h3 className="text-xl font-bold mb-8">Wyślij wiadomość</h3>
      <form action="" className="flex flex-col">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label className={styleLabel}>Imię</label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                className={styleInput}
              />
              <label className={styleLabel}>Telefon</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className={styleInput}
              />
              <label className={styleLabel}>E-mail</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className={styleInput}
              />
              <label className={styleLabel}>Wiadomość</label>
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
