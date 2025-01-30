import { FaGithub, FaLinkedin, FaSearch, FaFile } from "react-icons/fa";
const Pinned = () => {
  return (
    <section className="h-32">
      <div className="px-3 h-12">
        <div className="bg-lsecondary text-txt rounded-lg h-8 p-2 flex gap-2 text-sm items-center">
          <FaSearch size={14} />
          <input
            type="text"
            placeholder="Search"
            className="bg-lsecondary w-full outline-none "
          />
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://github.com/fujacob"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-16 h-16 p-2 rounded-full"
          >
            <FaGithub size={40} color="white" />
          </a>
          <h3 className="text-xs text-txt">GitHub</h3>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/fujacob"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-16 h-16 p-2 rounded-full"
          >
            <FaLinkedin size={40} color="white" />
          </a>
          <h3 className="text-xs text-txt">LinkedIn</h3>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <a
            href="/Jacob_Fu_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-lsecondary w-16 h-16 p-2 rounded-full"
          >
            <FaFile size={40} color="white" />
          </a>
          <h3 className="text-xs text-txt">Resume</h3>
        </div>
      </div>
    </section>
  );
};
export default Pinned;
