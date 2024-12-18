import React, { useState } from "react";
import SlideModal from "./SlideModal";

const Slide = ({ testimonial, maxLength = 300 }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = () => {
    setSelectedTestimonial(testimonial); // Set the selected testimonial
  };

  const closeModal = () => {
    setSelectedTestimonial(null); // Clear the selected testimonial
  };

  const textLength =
    testimonial.text.length > maxLength
      ? `${testimonial.text.slice(0, maxLength)}...`
      : testimonial.text;

  return (
    <div>
      <div className="w-full shadow-[0_0_30px_20px_rgba(237,_245,_255,_0.5)] h-auto p-6 md:h-64 bg-white rounded-lg flex flex-col justify-center items-center">
        <p className="text-[14px] md:text-[16px] leading-6 font-normal text-[#4C4C4C] mb-4">
          {testimonial.text.length > maxLength ? textLength : testimonial.text}
        </p>

        {testimonial.text.length > maxLength && (
          <button
            onClick={openModal}
            className="text-[#8B6FC4] font-medium text-sm"
          >
            Read More
          </button>
        )}

        <div className="w-full flex items-center justify-center mt-4 border-t border-[#E5EFFF] pt-4">
          <img
            src={testimonial.logo}
            alt="Avatar"
            className="rounded-full w-12 h-12 md:w-16 md:h-16 mr-4"
          />
          <div className="text-start">
            <h4 className="font-medium text-base md:text-lg">
              {testimonial.name}
            </h4>
            <p className="text-xs md:text-sm text-gray-500">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>

      {selectedTestimonial && (
        <SlideModal
          selectedTestimonial={selectedTestimonial}
          onClose={closeModal} // Pass the close handler to the modal
        />
      )}
    </div>
  );
};

export default Slide;
