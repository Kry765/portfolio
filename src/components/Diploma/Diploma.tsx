import diplomaData from "../../data/diplomaData.json";
import type { DiplomaEntry, DiplomaListImage } from "../../types/Diploma";
import { useState } from "react";
import { X } from "lucide-react";
const typedData = diplomaData as DiplomaEntry;

export default function Diploma() {
  const [selectedImage, setSelectedImage] = useState<DiplomaListImage | null>(
    null
  );

  const viewImage = (image: DiplomaListImage) => {
    setSelectedImage(image);
  };

  return (
    <div className="w-auto md:px-24 py-32">
      <h2 className="py-2 px-4 font-bold text-center md:text-left text-2xl text-white gap-4">
        {typedData.diplomaSectionTitle}
      </h2>
      <div className="flex md:flex-row flex-col overflow-x-hidden">
        {typedData.diplomaImage.map((data: DiplomaListImage, index: number) => (
          <div
            key={index}
            className="md:w-1/3 relative m-4 hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={data.source}
              alt={data.alternative}
              className={`w-full h-auto object-cover rounded-lg shadow-md`}
              onClick={() => viewImage(data)}
            />
          </div>
        ))}
        {selectedImage && (
          <div
            className="fixed inset-0 h-screen w-screen bg-black bg-opacity-[50%] flex items-center justify-center z-50 overflow-auto"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full px-4">
              <img
                src={selectedImage.source}
                alt={selectedImage.alternative}
                className="max-w-full max-h-screen object-contain rounded-lg"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="bottom-[100%] right-[0%] py-0 px-4 absolute md:top-[-25px] md:right-[-25px] text-white text-2xl font-bold"
              >
                <X className="cursor-pointer hover:text-[#0F6D95] transition-color duration-350" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
