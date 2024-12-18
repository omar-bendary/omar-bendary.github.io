import React from "react";
import Skills from "./Skills";
import Icons from "./Icons";
import Bullets from "../DesignAccessories/Bullets";
import SideDev from "../DesignAccessories/SideDiv";

const ToolAndSkills = ({ socialMediaData, toolsAndSkillsData }) => {
  return (
    <section
      id="skills"
      className="w-full h-auto  md:h-[497px] rounded-3xl lg:rounded-[168px] shadow-[0_0_100px_40px_rgba(237,_245,_255,_1)] flex justify-center items-center p-6 md:p-12"
    >
      <div className="flex flex-col justify-center items-center space-y-6">
        <h1 className="text-xl md:text-2xl font-bold text-[#8B6FC4] text-center">
          Tool & Skills
        </h1>
        <Skills toolsAndSkillsData={toolsAndSkillsData} />
        <p className="text-xl md:text-2xl font-bold text-[#8B6FC4] text-center">
          Check out me
        </p>
        <Icons socialMediaData={socialMediaData} />
        <p className="text-xl md:text-2xl font-bold text-[#8B6FC4] text-center">
          Contact me
        </p>
        <a
          href="mailto:omar.bendary.jr@gmail.com"
          className="text-lg md:text-xl font-semibold text-center"
        >
          omar.bendary.jr@gmail.com
        </a>
      </div>
      <Bullets />
      <SideDev position={"left"} top={"top-[900px]"} left={"left-[1000px]"} />
    </section>
  );
};

export default ToolAndSkills;
