import { FooterIconContactMe, FooterTextContactMe } from "../../data/data";

export const FooterContactMe = () => {
  return (
    <div>
      <div>
        <h3 className="text-xl text-[#019760] mx-4 font-bold md:mt-8 md:text-center">
          Contact Me
        </h3>
        {FooterTextContactMe.map((FooterTextContactMe, index) => (
          <div key={index} className="flex mt-4">
            <span className="my-1 mx-4">{FooterIconContactMe[index]}</span>
            <p>{FooterTextContactMe}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
