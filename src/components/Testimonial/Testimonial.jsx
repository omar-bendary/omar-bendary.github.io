import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import SideDiv from "../DesignAccessories/SideDiv";

const Testimonial = ({ testimonial = { testimonials: [], text: "" } }) => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-[100vh]  md:min-h-screen lg:h-[100vh] xl:min-h-screen space-y-8">
      <div className="flex flex-col justify-center items-center z-10 space-y-6 md:space-y-8 lg:space-y-10">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
          Testimonial<span className="text-[#8B6FC4]">.</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-center font-normal text-gray-500 leading-relaxed md:leading-7 max-w-xl lg:max-w-3xl">
          {testimonial.text}
        </p>
      </div>
      <TestimonialSlider testimonialData={testimonial.testimonials} />
      <SideDiv position={"left"} top={"top-[4150px]"} left={"left-[1000px]"} />
      <SideDiv
        position={"right"}
        top={"top-[4000px]"}
        left={"left-[-1500px]"}
      />
    </section>
  );
};

export default Testimonial;
