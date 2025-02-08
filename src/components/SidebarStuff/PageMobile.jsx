import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaDesktop,
  FaPaperPlane,
  FaEnvelope,
} from "react-icons/fa";
const Page = ({
  title = "Home",
  tagline = "Welcome and quick introduction",
  type = "home",
}) => {
  return (
    <div className="flex flex-row p-6 hover:bg-iblue text-txt transition-all duration-400 hover:text-txtlight rounded-xl">
      <div className="w-1/5 mr-2">
        <div className="flex justify-center items-center rounded-full bg-lsecondary w-16 h-16">
          {type == "home" ? (
            <FaHome size={40} color="white" />
          ) : type == "about" ? (
            <FaUser size={40} color="white" />
          ) : type == "exp" ? (
            <FaBriefcase size={40} color="white" />
          ) : type == "blog" ? (
            <FaPaperPlane size={40} color="white" />
          ) : type == "projects" ? (
            <FaDesktop size={40} color="white" />
          ) : type == "contact" ? (
            <FaEnvelope size={40} color="white" />
          ) : null}
        </div>
      </div>

      <div className="flex flex-col w-4/5 h-16 gap-1">
        <div className="flex w-full justify-between text-2xl">
          <h1 className="font-bold text-white">{title}</h1> <h2>21:56</h2>
        </div>
        <p className="text-start text-lg">{tagline}</p>
      </div>
    </div>
  );
};
export default Page;
