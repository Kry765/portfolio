import { menu } from "../../data/menu.json";
import { personaly } from "../../data/personalyData.json";
import { ListMenu } from "../../shared/MenuWrapper";
import FooterDescription from "./FooterDescription";
import personalyData from "../../data/personalyData.json";
import type { PersonalyData } from "../../types/PersonalyData";
import AllRightReserved from "./AllRightReserved";

const typeData = personalyData as PersonalyData;

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center">
      <div className="bg-black text-white w-full">
        <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl">
          <FooterDescription
            data={typeData}
            className="w-full md:w-1/3 px-8 py-6 text-center md:text-left"
          />
          <ListMenu
            title="Menu"
            className="w-full md:w-1/3 px-8 py-6 text-center md:text-left"
            items={menu}
            isLink={true}
          />
          <ListMenu
            title="Contact"
            items={personaly}
            isLink={false}
            className="w-full md:w-1/3 px-8 py-6 text-center md:text-left"
          />
        </div>
      </div>
      <div>
        <AllRightReserved />
      </div>
    </footer>
  );
}
