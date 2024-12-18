import React from "react";
import { motion } from "framer-motion";
import SideDiv from "../DesignAccessories/SideDiv";

const Services = ({ services = { services: [], text: "" } }) => {
  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section id="services" className="w-full space-y-10 px-4 md:px-8 lg:px-16 h-auto pt-10">
      {/* TEXT HERE */}
      <div className="text-center space-y-6 mt-5">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl ">
          Services<span className="text-[#8B6FC4]">.</span>
        </h1>
        <p className="text-[14px] md:text-[16px] font-normal text-gray-500 leading-6">
          {services.text}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {services.services.map((service, index) => (
          <motion.div
            key={index}
            custom={index % 2 === 0 ? "left" : "right"}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            className="w-full h-auto md:h-52 bg-[rgb(244,_248,_255)] bg-[linear-gradient(180deg,_rgba(244,_248,_255,_0.625)_0%,_rgba(255,_255,_255,_1)_76%)] flex flex-col justify-between items-center p-6 rounded-3xl border-t-2 border-[#e0ecff]"
          >
            <div className="w-full flex justify-start items-center text-lg md:text-xl font-medium space-x-4">
              <div className="border-[1px] border-gray-200 rounded-lg p-[10px] md:p-[18px]">
                <img src={service.logo} alt={service.name} />
              </div>
              <h2 className="text-lg md:text-xl font-medium">{service.name}</h2>
            </div>
            <div className="w-full text-[14px] md:text-[18px] font-normal text-gray-500 leading-6 md:leading-9">
              {service.description}
            </div>
          </motion.div>
        ))}
        <SideDiv
          position={"left"}
          top={"top-[2400px]"}
          left={"left-[1000px]"}
        />
        <SideDiv
          position={"right"}
          top={"top-[2200px]"}
          left={"left-[-1500px]"}
        />
      </div>
    </section>
  );
};

export default Services;
