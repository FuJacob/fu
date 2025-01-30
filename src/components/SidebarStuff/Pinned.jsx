import { FaGithub, FaLinkedin, FaSearch, FaUserAlt } from "react-icons/fa";
const Pinned = () => {
  return (
    <>
      <div className="bg-lsecondary text-txt rounded-lg h-8 p-2 flex gap-2 text-sm items-center">
        <FaSearch size={14} />
          Search</div>

      <div className="flex gap-4 justify-center">
        <div className="flex flex-col gap-1 items-center">
          <a
            href="https://github.com/fujacob"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-20 h-20 p-2 rounded-full"
          >
            <FaGithub size={50} color="white" />
          </a>
          <h3 className="text-xs text-txt">GitHub</h3>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <a
            href="https://www.linkedin.com/in/fujacob"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-20 h-20 p-2 rounded-full"
          >
            <FaLinkedin size={40} color="white" />
          </a>
          <h3 className="text-xs text-txt">LinkedIn</h3>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <a
            href="/Jacob_Fu_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-lsecondary w-20 h-20 p-2 rounded-full"
          >
            <FaUserAlt size={40} color="white" />
          </a>
          <h3 className="text-xs text-txt">Resume</h3>
        </div>
      </div>
    </>
  );
};
export default Pinned;
