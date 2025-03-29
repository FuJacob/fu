import { motion } from "framer-motion";
import experiences from "../../../data/experience";
import GrayMessage from "../GrayMessage";
const ExperiencesMessages = () => {
  let index = 1;
  return (
    <>
      <GrayMessage bg="[#2AB24C]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 py-2 hover:scale-105 transform transition-transform duration-500">
            <h3 className="text-sm">Oct 2023 - Jan 2024</h3>
            <p className="text-4xl font-bold mt-1">Weehooey</p>
            <p className="mt-1 italic">Information Technology Intern</p>
          </div>
        </motion.div>
      </GrayMessage>
      <GrayMessage bg="[#7d393a]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 py-2 hover:scale-105 transform transition-transform duration-500">
            <h3 className="text-sm font-light">Jun 2024 - Sep 2024</h3>
            <p className="text-3xl font-bold mt-1">
              1000 Islands Gananoque Chamber of Commerce
            </p>
            <p className="mt-1 italic">Web and Graphic Designer Intern</p>
          </div>
        </motion.div>
      </GrayMessage>
      <GrayMessage customStyle="bg-gradient-to-r from-[#FF2381] to-[#FFC532]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 py-2 hover:scale-105 transform transition-transform duration-500">
            <h3 className="text-sm font-light">Dec 2024 - Mar 2025</h3>
            <p className="text-4xl font-bold mt-1">PetMap</p>
            <p className="mt-1 italic">Software Engineer</p>
          </div>
        </motion.div>
      </GrayMessage>
      <GrayMessage customStyle="bg-gradient-to-r from-[#2B5D81] to-[#192E46]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 py-2 hover:scale-105 transform transition-transform duration-500">
            <h3 className="text-sm font-light">Jan 2025 - present</h3>
            <p className="text-4xl font-bold mt-1">3Tenets Consulting</p>
            <p className="mt-1 italic">Software Engineer</p>
          </div>
        </motion.div>
      </GrayMessage>{" "}
      <GrayMessage customStyle="bg-gradient-to-r from-[#3A36BD] to-[#200268]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 py-2 hover:scale-105 transform transition-transform duration-500">
            <h3 className="text-sm font-light">Feb 2025 - Jun 2025</h3>
            <p className="text-4xl font-bold mt-1">Bridgewell Financial</p>
            <p className="mt-1 italic">Software Engineering Intern</p>
          </div>
        </motion.div>
      </GrayMessage>
      <GrayMessage customStyle="bg-[#ff5c34]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 py-2 hover:scale-105 transform transition-transform duration-500">
            <h3 className="text-sm font-light">Feb 2024 - Apr 2025</h3>
            <p className="text-4xl font-bold mt-1">HubSpot</p>
            <p className="mt-1 italic">Software Engineering Intern</p>
          </div>
        </motion.div>
      </GrayMessage>
    </>
  );
};

export default ExperiencesMessages;
