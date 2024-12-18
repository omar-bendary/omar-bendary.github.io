import React, { useEffect, useRef } from "react";

const SlideModal = ({ selectedTestimonial, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (selectedTestimonial && modalRef.current) {
      modalRef.current.showModal(); // Show modal when a testimonial is selected
    }
  }, [selectedTestimonial]);

  const handleClose = () => {
    modalRef.current.close(); // Close the modal
    onClose(); // Reset the state in the parent
  };

  if (!selectedTestimonial) {
    return null;
  }

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box w-11/12 max-w-5xl bg-white p-6 md:p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <p className="max-w-2xl text-[14px] md:text-[16px] leading-6 md:leading-7 font-light text-[#4C4C4C] mb-6 text-left">
            {selectedTestimonial.text}
          </p>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center mt-4 border-t border-[#E5EFFF] pt-4">
            <img
              src={selectedTestimonial.logo}
              alt="Avatar"
              className="rounded-full w-12 h-12 md:w-16 md:h-16 mr-0 sm:mr-4 mb-4 sm:mb-0"
            />
            <div className="text-center sm:text-start">
              <h4 className="font-medium text-base md:text-lg text-[#333]">
                {selectedTestimonial.name}
              </h4>
              <p className="text-xs md:text-sm text-gray-500">
                {selectedTestimonial.role}
              </p>
            </div>
          </div>
        </div>

        <div className="modal-action flex justify-center mt-6">
          <form method="dialog">
            <button
              className="btn btn-outline w-[160px] md:w-[188px] h-[44px] md:h-[52px] rounded-full border-none bg-[#8B6FC4] text-white font-semibold text-[16px] md:text-[18px] leading-4 hover:bg-[#8B6FC4] hover:text-white shadow-[0_0_20px_10px_rgba(237,_245,_255,_0.3)] md:shadow-[0_0_30px_20px_rgba(237,_245,_255,_0.5)] transition-all duration-300 ease-in-out"
              onClick={handleClose}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default SlideModal;
