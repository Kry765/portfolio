import diplomaData from "../../data/diplomaData.json";
import type { DiplomaEntry, DiplomaListImage } from "../../types/Diploma";

const typedData = diplomaData as DiplomaEntry;

export default function Diploma() {
  return (
    <div className="px-12 md:px-24">
      <h2 className="py-2 px-4 font-bold text-center md:text-left text-2xl text-[#0F6D95] gap-4">
        {typedData.diplomaSectionTitle}
      </h2>
      <div className="flex md:flex-row flex-col w-full overflow-x-hidden">
        {typedData.diplomaImage.map((data: DiplomaListImage, index: number) => (
          <div
            key={index}
            className="md:w-1/3 relative m-4 hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={data.source}
              alt={data.alternative}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
