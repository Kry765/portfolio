export default function AboutMe() {
  return (
    <section id="about">
      <h2>O mnie</h2>
      <div>
        <p>
          Jestem pasjonatem tworzenia oprogramowania, który z entuzjazmem
          podchodzi do projektowania i budowania interaktywnych doświadczeń.
        </p>
      </div>
      <section>
        <h3>dane osobowe</h3>
        <dl>
          <dt>Wiek</dt>
          <dd>26</dd>
          <dt>email</dt>
          <a href="mailto:example@gmail.com">example@gmail.com</a>
          <dt>Telefon</dt>
          <a href="tel:+48573226219">+48-573-226-219</a>
        </dl>
      </section>
      <section>
        <h3>Edukacja</h3>
        <dl>
          <dt>2015-2019</dt>
          <dd>zstre</dd>

          <dt>2020-2025</dt>
          <dd>zskli</dd>
        </dl>
      </section>
      <section>
        <h3>Narzędzia</h3>
        <ul>
          <li>Github</li>
          <li>Docker</li>
          <li>Figma</li>
          <li>Visual Studio Code</li>
          <li>Copilot</li>
        </ul>
      </section>
    </section>
  );
}
