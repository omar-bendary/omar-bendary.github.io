import React from "react";
import { motion, useInView } from "framer-motion";

const Skills = ({ toolsAndSkillsData = [] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex justify-center flex-wrap gap-9 p-4">
      {toolsAndSkillsData.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col space-y-2 font-normal justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex flex-col justify-center items-center bg-[#F8F8F8] w-[45px] h-[45px] lg:w-[72px] lg:h-[72px] rounded-full">
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-6 h-6 lg:w-10 lg:h-10 object-contain"
            />
          </div>
          <div className="text-sm lg:text-xl">{skill.name}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
