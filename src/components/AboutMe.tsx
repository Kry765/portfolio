import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faDocker,
  faSass,
  faNode,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { iconData } from "../data/icon.json";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface iconLists {
  key: string;
  icon: keyof typeof iconMap;
}

const iconMap: { [key: string]: IconDefinition } = {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faDocker,
  faSass,
  faNode,
  faGithub,
};

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row mx-12">
      <article className="text-center md:text-left md:w-[50%] flex flex-col justify-center">
        <h2 className="py-2 px-6  font-bold text-2xl">O mnie</h2>
        <p className="pt-4 md:px-6">
          Jestem web developerem specjalizującym się w tworzeniu nowoczesnych i
          wydajnych aplikacji internetowych przy użyciu technologii React oraz
          TypeScript.
        </p>
        <p className="py-2 md:px-6">
          Tworzę strony internetowe dopasowane do indywidualnych potrzeb
          klientów – od prostych stron wizytówek, po bardziej złożone aplikacje
          webowe.
        </p>
        <h2 className="py-2 md:px-6 font-bold text-2xl">Edukacja</h2>
        <div>
          <p className="py-2 md:px-6">2016-2019</p>
          <p className="py-2 md:px-6">
            Zespół Szkół Technicznych i Leśnych w Żywcu
          </p>
        </div>
        <div>
          <p className="py-2 md:px-6">2020-2024</p>
          <p className="py-2 md:px-6">
            Wyższa Szkoła Informatyki i Zarządzania w Bielsku - Białej
          </p>
        </div>
      </article>
      <article className="md:w-[50%] flex flex-col items-center">
        <div className="max-w-[50%]">
          <h2 className="py-6 md:px-6  font-bold text-2xl">Umiejętności</h2>
          {(iconData as iconLists[]).map((item) => (
            <span key={item.key}>
              <FontAwesomeIcon
                icon={iconMap[item.icon]}
                size="4x"
                fixedWidth
                className="p-4 hover:pointer"
              />
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
