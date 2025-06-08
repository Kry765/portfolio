import diplomaData from "../../data/diplomaData.json";
import type { DiplomaEntry, DiplomaListImage } from "../../types/Diploma";

const typedData = diplomaData as DiplomaEntry;

export default function Diploma() {
  return (
    <div className="px-12 md:px-24">
      <h2 className="py-2 px-4 font-bold text-center md:text-left text-2xl text-[#0F6D95] gap-4">
        {typedData.diplomaSectionTitle}
      </h2>
      <div className="flex md:flex-row flex-col w-full">
        {typedData.diplomaImage.map((data: DiplomaListImage, index: number) => (
          <div className="md:w-1/3 relative m-4 hover:cursor-pointer">
            <img key={index} src={data.source} alt={data.alternative} />
            <div className="absolute flex items-center flex-col justify-center top-0 bg-[#000] opacity-[75%] w-[100%] h-[100%]">
              <p className="text-white text-center">Powiększ obraz</p>
              <p className="text-white text-center text-6xl">+</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
