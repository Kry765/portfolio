export default function Headers() {
  return (
    <header className="bg-black text-white py-18 w-full h-[90vh]">
      <section className="flex justify-center items-center flex-col ">
        <p className="my-4">Hello I'm</p>
        <h1 className="my-4 font-bold">Krzysztof Klęka</h1>
        <p className="my-4 text-[#0F6D95] font-bold">Web Developer</p>
        <button
          className="rounded-md
 bg-[#0F6D95] radius-[12px] py-2 px-14"
        >
          Contact
        </button>
      </section>
      <figure>
        <img src="" alt="" />
      </figure>
    </header>
  );
}
