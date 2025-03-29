import { motion } from "framer-motion";

const GrayMessage = ({
  message = "Hi this is a sample message by Jacob Fu. Here we will talk about a lot of different things like how I love eating food etc etc.",
  children,
  bg = "lsecondary",
  customStyle = "",
  order=1
}) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, y: 10 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{
        type: "spring", stiffness: 150, damping: 15,
        delay: 0.2*order,
       }}>
    <div className={`inline-block text-md bg-${bg} ${customStyle} rounded-2xl rounded-bl-none w-fit max-w-md p-2.5`}>
      {children ? children : message}
    </div>
    </motion.div>
    
  );
};

export default GrayMessage;
