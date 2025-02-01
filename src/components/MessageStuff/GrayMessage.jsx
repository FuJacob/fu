import { motion } from "framer-motion";

const GrayMessage = ({
  message = "Hi this is a sample message by Jacob Fu. Here we will talk about a lot of different things like how I love eating food etc etc.",
  children,
}) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 150 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        duration: 0.1,
      }}
      viewport={{ once: true }}
      className="inline-block text-md bg-lsecondary rounded-2xl rounded-bl-none w-fit max-w-md p-2.5"
    >
      {children ? children : message}
    </motion.div>
  );
};

export default GrayMessage;
