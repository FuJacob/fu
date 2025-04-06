import { motion } from "framer-motion";
import experiences from "../../../data/experience";
import GrayMessage from "../GrayMessage";
import { M_PLUS_1 } from "next/font/google";

const ExperiencesMessages = () => {
  let index = 1;
  let counter = 1;
  const timeGap = 2;
  return (
    <>
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          delay: 0.2 * counter,
        }}
      >
        <h1 className="text-xs text-txt text-center">Oct 2023 - Jan 2024</h1>
      </motion.div>
      <GrayMessage
        bg="[#2AB24C]"
        customStyle="bg-[#2AB24C]"
        order={(counter += timeGap)}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 hover:scale-105 transform transition-transform duration-500 rounded-3xl">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white rounded-2xl w-10 h-10 flex justify-center items-center">
                <img src="weehooey.png" alt="weehooey" className="w-10" />
              </div>
              <div className="flex flex-col">
                <p className="font-black text-lg">Weehooey Inc.</p>
                <p className="text-sm font-bold italic">
                  Information Technology Intern
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </GrayMessage>
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          delay: 0.2 * counter,
        }}
      >
        <h3 className="text-xs text-txt text-center">Jun 2024 - Sep 2024</h3>
      </motion.div>
      <GrayMessage
        bg="[#7d393a]"
        customStyle="bg-[#7d393a]"
        order={(counter += timeGap)}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 hover:scale-105 transform transition-transform duration-500 rounded-3xl">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white rounded-2xl w-10 h-10 flex justify-center items-center">
                <img src="1000islands.png" alt="weehooey" className="w-7" />
              </div>
              <div className="flex flex-col">
                <p className="font-black text-lg">1000 Islands Gan. Chamber</p>
                <p className="text-sm font-bold italic">
                  Web and Graphic Designer Intern
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </GrayMessage>
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          delay: 0.2 * counter,
        }}
      >
        <h3 className="text-xs text-txt text-center">Dec 2024 - Mar 2025</h3>
      </motion.div>
      <GrayMessage
        customStyle="bg-gradient-to-r from-[#FF2381] to-[#FFC532]"
        order={(counter += timeGap)}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 hover:scale-105 transform transition-transform duration-500 rounded-3xl">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white rounded-2xl w-10 h-10 flex justify-center items-center">
                <img src="weehooey.png" alt="weehooey" className="w-10" />
              </div>
              <div className="flex flex-col">
                <p className="font-black text-lg">PetMap</p>
                <p className="text-sm font-bold italic">Software Engineer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </GrayMessage>
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          delay: 0.2 * counter,
        }}
      >
        <h3 className="text-xs text-txt text-center">Jan 2025 - present</h3>
      </motion.div>
      <GrayMessage
        customStyle="bg-gradient-to-r from-[#2B5D81] to-[#192E46]"
        order={(counter += timeGap)}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 hover:scale-105 transform transition-transform duration-500 rounded-3xl">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white rounded-2xl w-10 h-10 flex justify-center items-center">
                <img
                  src="3tenets.png"
                  alt="3Tenets Consulting logo"
                  className="w-7"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-black text-lg">3Tenets Consulting</p>
                <p className="text-sm font-bold italic">Software Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </GrayMessage>
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          delay: 0.2 * counter,
        }}
      >
        <h3 className="text-xs text-txt text-center">Feb 2025 - present</h3>
      </motion.div>
      <GrayMessage
        customStyle="bg-gradient-to-r from-[#3A36BD] to-[#200268]"
        order={(counter += timeGap)}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 hover:scale-105 transform transition-transform duration-500 rounded-3xl">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white rounded-2xl w-10 h-10 flex justify-center items-center">
                <img
                  src="bridgewell.png"
                  alt="Bridgewell Financial Logo"
                  className="w-7"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-black text-lg">Bridgewell Financial</p>
                <p className="text-sm font-bold italic">
                  Software Engineering Intern
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </GrayMessage>
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          delay: 0.2 * counter,
        }}
      >
        <h3 className="text-xs text-txt text-center">
          Incoming Summer 2025 at Cambridge, MA!
        </h3>
      </motion.div>
      <GrayMessage
        bg="[#ff5c34]"
        customStyle="bg-[#ff5c34]"
        order={(counter += timeGap)}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index++ }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="pr-8 pl-2 hover:scale-105 transform transition-transform duration-500 rounded-3xl">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white rounded-2xl w-10 h-10 flex justify-center items-center">
                <img src="hubspot.png" alt="HubSpot Logo" className="w-7" />
              </div>
              <div className="flex flex-col">
                <p className="font-black text-lg">HubSpot</p>
                <p className="text-sm font-bold italic">
                  Software Engineering Intern
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </GrayMessage>
    </>
  );
};

export default ExperiencesMessages;
