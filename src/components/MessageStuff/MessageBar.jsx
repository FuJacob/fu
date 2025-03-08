import { FaGrin, FaPlus, FaArrowUp } from "react-icons/fa";
import { useState } from "react";

const MessageBar = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary relative right-0 bottom-0 z-50 flex gap-4 w-full h-12 p-6 justify-center items-center rounded-br-2xl"
    >
      <button
        type="button"
        className="flex justify-center items-center bg-lsecondary w-7 h-7 rounded-full"
      >
        <FaPlus size={15} color="white" />
      </button>
      <div className="border-2 w-4/5 border-lsecondary text-white flex items-center rounded-2xl h-8 p-2">
        <input
          type="text"
          placeholder="iMessage"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-primary w-full outline-none"
        />
      </div>
      <button
        type="button"
        className="flex justify-center items-center bg-lsecondary w-7 h-7 rounded-full hover:bg-gray-600"
      >
        <FaGrin size={15} color="white" />
      </button>
      <button
        type="submit"
        className="flex justify-center items-center bg-iblue w-7 h-7 rounded-full hover:bg-blue-600 transition-colors"
      >
        <FaArrowUp size={15} color="white" />
      </button>
    </form>
  );
};

export default MessageBar;
