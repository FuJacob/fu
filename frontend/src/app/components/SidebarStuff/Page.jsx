import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaDesktop,
  FaPaperPlane,
  FaEnvelope,
} from "react-icons/fa";

const currDate = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
const Page = ({
  title = "Home",
  tagline = "Welcome and quick introduction",
  type = "home",
}) => {

  return (
    <div className="flex flex-row p-3 hover:bg-iblue text-txt transition-all duration-400 hover:text-txtlight rounded-xl">
      <div className="w-1/5 mr-2">
        <div className="flex justify-center items-center rounded-full bg-lsecondary w-12 h-12">
          {type == "home" ? (
            <FaHome size={30} color="white" />
          ) : type == "about" ? (
            <FaUser size={30} color="white" />
          ) : type == "exp" ? (
            <FaBriefcase size={30} color="white" />
          ) : type == "blog" ? (
            <FaPaperPlane size={30} color="white" />
          ) : type == "projects" ? (
            <FaDesktop size={30} color="white" />
          ) : type == "contact" ? (
            <FaEnvelope size={30} color="white" />
          ) : null}
        </div>
      </div>

      <div className="flex flex-col w-4/5 h-16 gap-1">
        <div className="flex w-full justify-between text-sm">
          <h1 className="font-bold text-white">{title}</h1> <h2>{currDate}</h2>
        </div>
        <p className="text-start text-xs">{tagline}</p>
      </div>
    </div>
  );
};
export default Page;
