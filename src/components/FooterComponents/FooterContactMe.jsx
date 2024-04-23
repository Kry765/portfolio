import { FooterIconContactMe, FooterTextContactMe } from "../../data/data";

export const FooterContactMe = () => {
  return (
    <div>
      <div>
        <h3 className="flex flex-row text-xl mx-4 font-bold md:justify-center md:mt-8">
          Contact Me
        </h3>
        {FooterTextContactMe.map((FooterTextContactMe, index) => (
          <div key={index} className="flex">
            <span>{FooterIconContactMe[index]}</span>
            <p>{FooterTextContactMe}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
