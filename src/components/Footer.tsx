import { Github, Linkedin, Facebook } from "lucide-react";
import { menu } from "../data/menu.json";
import { personaly } from "../data/personalyData.json";
import { ListMenu } from "../shared/MenuWrapper";

export default function Footer() {
  return (
    <footer className="flex items-start md:justify-between flex-col md:flex-row bg-black text-white">
      <div className="px-8 py-6 w-full md:w-[40%] text-center md:text-left">
        <h3 className="py-2">Christopher</h3>
        <p className="px-auto">
          Jestem web developerem z solidnym wykształceniem technicznym.
          Specjalizuję się w technologii React, dbając przede wszystkim o
          wydajność, dostępność i estetykę kodu.
        </p>
      </div>
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
      <div className="px-8 py-6 py-2 w-full md:w-[auto] text-center">
        <h3 className="font-bold">Social Media</h3>
        <div className="flex items-center justify-center py-2">
          <Github />
          <Linkedin className="ml-4" />
          <Facebook className="ml-4" />
        </div>
      </div>
    </footer>
  );
}
