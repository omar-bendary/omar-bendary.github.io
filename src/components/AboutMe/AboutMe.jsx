import React from "react";
import aboutMePic from "../../assets/media/19362653 1.png";
import Button from "../Button";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

const AboutMe = ({ technicalSkills, ownerInfo }) => {
  const resume = ownerInfo.resume;

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center w-full min-h-[80vh] px-4 lg:px-0 md:space-y-16"
    >
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        About me<span className="text-[#8B6FC4]">.</span>
      </h1>
      <div className="flex flex-col xl:flex-row items-center mt-8 lg:mt-0">
        <motion.img
          src={aboutMePic}
          className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl rounded-lg mb-6 lg:mb-0 lg:mr-8"
          alt="About Me"
          whileHover={{ scale: 1.05 }}
          animate={{
            y: ["-2%", "2%", "-2%"],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <div className="space-y-4 md:space-y-7 text-center lg:text-left max-w-xl">
          <p className="tracking-normal font-medium text-base sm:text-lg md:text-xl leading-6 sm:leading-9 md:leading-[38px]">
            {ownerInfo.about}
          </p>
          <div>
            {technicalSkills.map((skill, index) => (
              <ProgressBar
                key={index}
                label={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <a href={resume} download>
              <Button title="Download CV" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
