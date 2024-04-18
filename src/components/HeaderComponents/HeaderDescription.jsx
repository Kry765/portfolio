const MyNameTitle = (props) => {
  return (
    <h1
      className="font-bold animate-fade-right 
    text-black text-5xl md:z-0 w-full text-wrap md:text-center "
    >
      <span>Hello, </span>
      My name is <span className="text-[#176B87]">{props.name}</span>
    </h1>
  );
};

const SpecializationText = (props) => {
  return (
    <h3 className="font-bold text-[#666666] text-4xl p-2 mt-4 mb-4 animate-fade-right md:z-0">
      {props.specialization}
    </h3>
  );
};

const BottomRadius = () => {
  return (
    <div className="rounded-full absolute -z-0 w-96 md:w-72 md:h-72 h-96 right-[-10%] bottom-[-10%] bg-[#176B87]"></div>
  );
};

const TopRadius = () => {
  return (
    <div className="rounded-full absolute bg-[#FFFFFF] md:w-72 md:h-72  top-[-10%] left-[-10%] w-96 h-96 -z-0 "></div>
  );
};

const HeaderBtn = () => {
  return (
    <button className="p-2 z-10 md:z-10 animate-fade-right hover:cursor-pointer hover:bg-[#176B87] border-none bg-[#64ccc5] text-white rounded-2xl	h-[50px] w-[250px] font-bold uppercase transition duration-300">
      Let's Go
    </button>
  );
};

export const HeaderDescription = () => {
  const name = "Christopher";
  const specialization = "Web-Developer";

  return (
    <div className="relative flex justify-center bg-[#d9d9d9] flex-col items-start w-6/12 h-[100vh] p-10 truncate md:w-[100%] md:items-center">
      <TopRadius />
      <MyNameTitle name={name} />
      <SpecializationText specialization={specialization} />
      <HeaderBtn />
      <BottomRadius />
    </div>
  );
};
