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
    <footer>
      <div className="flex items-start md:justify-between flex-col md:flex-row bg-black text-white">
        <FooterDescription data={typeData} />
        <ListMenu
          title="Menu"
          className="px-8 py-6 w-full md:w-[20%] text-center md:text-left"
          items={menu}
          isLink={true}
        />
        <ListMenu
          title="Contact"
          items={personaly}
          isLink={false}
          className="px-8 py-6 w-full md:w-[20%] text-center md:text-left"
        />
      </div>

      <div>
        <AllRightReserved />
      </div>
    </footer>
  );
}
