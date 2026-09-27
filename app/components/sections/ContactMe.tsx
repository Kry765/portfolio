import Image from "next/image";
import map from "@/app/assets/map/mapa.png";

export default function ContactMe() {
  return (
    <>
      <section>
        <h2>Skontaktuj się</h2>
        <p>
          Masz jakiś projekt na myśli lub szukasz programisty front-endowego?
          Porozmawiajmy o tym.
        </p>
        <ul>
          <li>+48123123123</li>
          <li>example@gmail.com</li>
          <li>Żywiec, Polska</li>
        </ul>
        <figure>
          <Image src={map} alt="Moja lokalizacja" />
        </figure>
      </section>
      <section>
        <form>
          <label htmlFor="name">Imię</label>
          <input type="text" id="name" placeholder="Wprowadź imie" />
          <label htmlFor="email">Adres E-mail</label>
          <input type="email" id="email" placeholder="Wpisz adres e-mail" />
          <label htmlFor="message">Wiadomość</label>
          <textarea
            name="message"
            id="message"
            placeholder="Napisz wiadomość"
          ></textarea>
          <button type="submit">Wyślij wiadomość</button>
        </form>
      </section>
    </>
  );
}
