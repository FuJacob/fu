import { motion } from "framer-motion";

const BlueMessage = ({
  message = "Hi this is a sample message by Jacob Fu. Here we will talk about a lot of different things like how I love eating food etc etc.",
  children,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, y: 10 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="inline-block ml-auto text-md bg-iblue rounded-2xl rounded-br-none w-fit max-w-md p-2.5"
    >
      {children ? children : message}
    </motion.div>
  );
};

export default BlueMessage;
