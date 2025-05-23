import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe() {
  return (
    <section>
      <article>
        <h2>O mnie</h2>
        <p>
          Jestem web developerem specjalizującym się w tworzeniu nowoczesnych i
          wydajnych aplikacji internetowych przy użyciu technologii React oraz
          TypeScript. Tworzę strony internetowe dopasowane do indywidualnych
          potrzeb klientów – od prostych stron wizytówek, po bardziej złożone
          aplikacje webowe.
        </p>
        <h2>Edukacja</h2>
        <div>
          <p>2016-2019</p>
          <p>Zespół Szkół Technicznych i Leśnych w Żywcu</p>
        </div>
        <div>
          <p>2020-2024</p>
          <p>Wyższa Szkoła Informatyki i Zarządzania w Bielsku - Białej</p>
        </div>
      </article>
      <article>
        <h2>Umiejętności</h2>
        <div>
          <FontAwesomeIcon icon="fa-brands fa-html5" />
        </div>
      </article>
    </section>
  );
}
