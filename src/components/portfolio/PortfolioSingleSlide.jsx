import { motion } from "framer-motion";
import googlePlay from "../../assets/media/Mask Group 51.png";
import appleStore from "../../assets/media/apple-store-icon-png-free-download-fourjayorg-app-store-icon-png-1000_736.png";

const PortfolioSingleSlide = ({ project }) => {
  const type = project.type;
  const websiteUrl = project.website_url;

  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0 p-6">
      {/* Left side content */}
      <div className="md:w-1/2 p-4 flex flex-col space-y-6">
        <h2 className="text-2xl md:text-3xl font-medium text-[#333] leading-[56px] mb-4">
          {project.name}
        </h2>

        {/* Description Section */}
        <div>
          <h4 className="text-lg font-semibold text-[#5070D1]">Description:</h4>
          <p className="text-md md:text-lg text-[#333]">
            {project.description}
          </p>
        </div>

        {/* Impact Section */}
        <div>
          <h4 className="text-lg font-semibold text-[#5070D1]">Impact:</h4>
          <p className="text-md md:text-lg text-[#333]">{project.impact}</p>
        </div>

        {/* View Live Section */}
        <div>
          <h4 className="text-lg font-semibold text-[#5070D1]">View Live:</h4>
          {type === "web" ? (
            <motion.a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#8B6FC4] text-white border-none rounded-full px-8 py-3 mt-4 inline-block text-lg shadow-lg hover:bg-[#7257A0] hover:shadow-xl transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              Visit the Website
            </motion.a>
          ) : (
            <div className="flex mt-4 space-x-4">
              <motion.a
                href={project.ios}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={appleStore}
                  alt="App Store"
                  className="w-[150px] md:w-[180px] object-contain"
                />
              </motion.a>
              <motion.a
                href={project.android}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={googlePlay}
                  alt="Google Play"
                  className="w-[150px] md:w-[180px] object-contain"
                />
              </motion.a>
            </div>
          )}
        </div>
      </div>

      {/* Right side image */}
      <div className="md:w-1/2 p-4">
        <img
          src={project.image}
          alt={project.name}
          className="w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default PortfolioSingleSlide;
