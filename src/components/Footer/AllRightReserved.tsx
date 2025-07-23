import personalyData from "../../data/personalyData.json";
import type { PersonalyData } from "../../types/PersonalyData";

const typeData = personalyData as PersonalyData;

export default function AllRightReserved() {
  return (
    <footer>
      <p className="text-center p-4">
        &copy; {typeData.allRight.footerAllRight}
      </p>
    </footer>
  );
}
