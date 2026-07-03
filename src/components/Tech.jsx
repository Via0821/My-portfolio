import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="flex flex-col items-center gap-3 w-28"
          key={technology.name}
        >
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
          <p className="text-secondary text-[14px] text-center leading-tight">
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
