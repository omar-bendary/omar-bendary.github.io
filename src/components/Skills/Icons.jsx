import React from "react";
import { motion, useInView } from "framer-motion";

const Icons = ({ socialMediaData = [] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once

  return (
    <div ref={ref} className="flex flex-wrap gap-4 justify-center p-4">
      {socialMediaData.map((social, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.2 }}
        >
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <img
              src={social.icon}
              alt={social.name}
              className="w-8 h-8 md:w-10 md:h-10 transition-transform transform"
            />
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Icons;
