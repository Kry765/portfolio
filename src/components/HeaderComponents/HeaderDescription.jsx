const MyNameTitle = (props) => {
  return (
    <h1 className="font-bold text-black text-5xl ">My name is {props.name}</h1>
  );
};

const SpecializationText = (props) => {
  return (
    <h3 className="font-bold text-[#666666] text-4xl mt-4 mb-4 md:z-0">
      {props.specialization}
    </h3>
  );
};

const BottomRadius = () => {
  return (
    <div className="rounded-full absolute bg- z-0 w-96 h-96 right-[-10%] bottom-[-10%] bg-[#176B87] md:hidden"></div>
  );
};

const TopRadius = () => {
  return (
    <div className="rounded-full absolute bg-[#D9D9D9] top-[-10%] left-[-10%] w-96 h-96 md:hidden"></div>
  );
};

const HeaderBtn = () => {
  return (
    <button className="border-none bg-[#64ccc5] text-white rounded-2xl	h-[50px] w-[250px] font-bold uppercase transition duration-300 hover:cursor-pointer hover:bg-[#176b87]">
      Let's Go
    </button>
  );
};

export const HeaderDescription = () => {
  const name = "Christopher";
  const specialization = "Web-Developer";

  return (
    <div className="relative flex justify-center flex-col items-start w-6/12 h-[100vh] p-10 truncate md:w-[100%]">
      <TopRadius />
      <MyNameTitle name={name} />
      <SpecializationText specialization={specialization} />
      <HeaderBtn />
      <BottomRadius />
    </div>
  );
};
