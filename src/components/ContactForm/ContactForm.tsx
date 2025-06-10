export default function ContactForm() {
  return (
    <div className="w-full px-12">
      <h3 className="text-xl font-bold mb-4">Lub skorzystaj z formularza</h3>
      <form action="" className="flex flex-col">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label className="block text-sm/6 font-medium text-gray-900">
              Imię
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <label className="block text-sm/6 font-medium text-gray-900">
                Telefon
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <label className="block text-sm/6 font-medium text-gray-900">
                E-mail
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <label className="block text-sm/6 font-medium text-gray-900">
                Wiadomość
              </label>
              <div className="mt-2">
                <textarea
                  name="about"
                  id="about"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
              <button>Wyślij</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
