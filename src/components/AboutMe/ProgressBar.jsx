import React from "react";
import { motion, useInView } from "framer-motion";

const ProgressBar = ({ label, percentage }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row items-center lg:space-x-14 mb-4"
    >
      <div className="w-full lg:w-40 flex-[0.4] flex items-center space-x-2 whitespace-nowrap mb-2 lg:mb-0">
        <div className="p-1 bg-gray-100 rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 23 23"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="text-gray-700 text-sm md:text-base lg:text-lg">
          {label}
        </span>
      </div>
      <div className="w-full lg:flex-[0.6] h-4">
        <div className="h-2 bg-[#F8F8F8] rounded-full">
          <motion.div
            className="h-full bg-[#8B6FC4] rounded-full flex justify-center items-center text-[clamp(10px,1vw,12px)] text-gray-700"
            style={{ width: `${percentage}%` }}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${percentage}%` } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
