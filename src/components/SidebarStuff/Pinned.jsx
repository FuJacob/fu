import { FaGithub, FaLinkedin, FaSearch, FaBriefcase } from "react-icons/fa";

const Pinned = () => {
  return (
    <section className="h-56 md:h-36">
      {/* Search Bar */}
      <div className="px-3 h-16 mb-8 md:mb-0">
        <div className="bg-lsecondary text-txt rounded-lg h-8 p-2 flex gap-2 text-sm items-center">
          <FaSearch size={14} />
          <input
            type="text"
            placeholder="Search"
            className="bg-lsecondary w-full outline-none transition-transform duration-200 ease-in-out focus:scale-105"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 justify-center">
        {/* GitHub */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://github.com/fujacob"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary  w-24 h-24 md:w-16 md:h-16 p-2 rounded-full 
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <FaGithub size={40} color="white" />
          </a>
          <h3 className="text-xs text-txt">GitHub</h3>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/fujacob"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary  w-24 h-24 md:w-16 md:h-16 p-2 rounded-full 
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <FaLinkedin size={40} color="white" />
          </a>
          <h3 className="text-xs text-txt">LinkedIn</h3>
        </div>

        {/* Resume */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="/Jacob_Fu_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-iblue  w-24 h-24 md:w-16 md:h-16 p-2 rounded-full 
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <FaBriefcase size={40} color="white" />
          </a>
          <h3 className="text-xs text-txt">Resume</h3>
        </div>
      </div>
    </section>
  );
};

export default Pinned;
