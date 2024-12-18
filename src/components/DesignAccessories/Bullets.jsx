import React from "react";

const Bullets = () => {
  return (
    <div className="hidden 2xl:flex items-center flex-col space-y-4 p-4 w-[60px] h-64 absolute left-10 top-[1290px] -z-10">
      <div className="flex flex-col space-y-10">
        {/* First row with a single bullet */}
        <div className="flex space-x-8">
          <span className="w-3 h-3 bg-[#8B6FC4] rounded-full block shadow-[0_0_10px_2px_#FF670038]"></span>
        </div>

        {/* Remaining rows with two bullets each */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex space-x-8">
            <span className="w-3 h-3 bg-[#8B6FC4] rounded-full block shadow-[0_0_10px_2px_#FF670038]"></span>
            <span className="w-3 h-3 bg-[#8B6FC4] rounded-full block shadow-[0_0_10px_2px_#FF670038]"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bullets;
