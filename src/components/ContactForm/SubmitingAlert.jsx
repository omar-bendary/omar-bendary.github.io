import React from "react";

const SubmittingAlert = () => {
  return (
    <div className="flex justify-center items-center w-full mt-4">
      <div
        role="alert"
        className="alert alert-success flex items-center gap-3 p-4 shadow-md bg-green-100 text-green-800 text-sm sm:text-base lg:text-lg max-w-sm sm:max-w-md lg:max-w-lg rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Your message has been sent successfully!</span>
      </div>
    </div>
  );
};

export default SubmittingAlert;
