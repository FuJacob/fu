import { FaGrin, FaPlus } from "react-icons/fa";

const MessageBar = () => {
  return (
    <div className="bg-primary relative right-0 bottom-0 z-50 flex gap-4 w-full h-12 p-6 justify-center items-center rounded-br-2xl">
      <a
        href=""
        className="flex justify-center items-center bg-lsecondary w-7 h-7 rounded-full"
      >
        <FaPlus size={15} color="white" />
      </a>
      <div className="border-2 w-4/5 border-lsecondary text-white flex items-center rounded-2xl h-8 p-2">
        <input
          type="text"
          placeholder="iMessage"
          className="bg-primary w-full outline-none"
        />
      </div>
      <a
        href=""
        className="flex justify-center items-center bg-lsecondary w-7 h-7 rounded-full"
      >
        <FaGrin size={15} color="white" />
      </a>
    </div>
  );
};

export default MessageBar;
