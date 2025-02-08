import { FaGithub, FaLinkedin, FaSearch, FaBriefcase } from "react-icons/fa";

const Pinned = () => {
  return (
    <section className="h-36">

      {/* Social Links */}
      <div className="flex gap-4 justify-center">
        {/* GitHub */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://github.com/fujacob"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-24 h-24 p-2 rounded-full 
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <FaGithub size={60} color="white" />
          </a>
          <h3 className="text-lg text-txt">GitHub</h3>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/fujacob"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-24 h-24 p-2 rounded-full 
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <FaLinkedin size={60} color="white" />
          </a>
          <h3 className="text-lg text-txt">LinkedIn</h3>
        </div>

        {/* Resume */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="/Jacob_Fu_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-iblue w-24 h-24 p-2 rounded-full 
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <FaBriefcase size={60} color="white" />
          </a>
          <h3 className="text-lg text-txt">Resume</h3>
        </div>
      </div>
    </section>
  );
};

export default Pinned;
