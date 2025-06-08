export default function ContactForm() {
  return (
    <div className="flex flex-row">
      <div>
        <h3>Masz pytania? Skontatuk się z nami</h3>
        <div>
          <p>Telefon</p>
          <p>573-226-219</p>
        </div>
        <div>
          <p>E-mail</p>
          <p>krzysztofkleka91@gmail.com</p>
        </div>
        <div>
          <p>Adres</p>
          <p>34-330 Trzebinia</p>
          <p>ul. Wypoczynkowa 8</p>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col">
          <input type="text" placeholder="imię" />
          <input type="text" placeholder="telefon" />
          <input type="text" placeholder="e-mail" />
          <textarea name="" id="" placeholder="Napisz wiadomość."></textarea>
        </form>
      </div>
    </div>
  );
}
