import BlueMessage from "./BlueMessage";
import GrayMessage from "./GrayMessage";
import MessageBar from "./MessageBar";
import ExperiencesMessages from "./Experiences/ExperiencesMessages";
import AboutMessages from "./About/AboutMessages";
import HomeMessages from "./Home/HomeMessages";
import ProjectsMessages from "./Projects/ProjectsMessages";
import BlogMessages from "./Blog/BlogMessages";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../SidebarStuff/AppContext";
import ContactMessages from "./Contact/ContactMessages";
import { FaArrowLeft } from "react-icons/fa6";
import Sidebar from "../SidebarStuff/Sidebar";
const Main = () => {
  const { pageOpen } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(!menuOpen);
  }, [pageOpen]);

  return (
    <section className="md:w-2/3 flex flex-col h-screen md:h-full rounded-tr-2xl md:rounded-tr-2xl md:rounded-br-2xl bg-black">
      <div className="fixed relative top-0 right-0 bg-secondary/95 md:rounded-tr-2xl p-8 md:p-4">
        <div className="flex items-center gap-2 text-txt text-sm">
          <div className="md:hidden flex flex-row z-50">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaArrowLeft size={40} />
            </button>{" "}
            {menuOpen && (
              <div className="fixed top-[-8] left-0">
                <Sidebar />
              </div>
            )}
            <div className="flex flex-col w-full justify-center items-center"></div>
            <img
              src="avatar.png"
              alt="avatar"
              className="md:hidden w-12 h-12 rounded-full"
            />
            <p>
              To:
              <span className="text-white"> Jacob Fu</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-white p-4 flex flex-col justify-start gap-2 w-full h-96 md:h-full grow overflow-y-auto bg-primary">
        <h1 className="text-xs text-txt text-center">iMessage</h1>

        {pageOpen == "home" ? (
          <HomeMessages />
        ) : pageOpen == "exp" ? (
          <ExperiencesMessages />
        ) : pageOpen == "about" ? (
          <AboutMessages />
        ) : pageOpen == "projects" ? (
          <ProjectsMessages />
        ) : pageOpen == "blog" ? (
          <BlogMessages />
        ) : pageOpen == "contact" ? (
          <ContactMessages />
        ) : (
          <div className="flex flex-grow" />
        )}
      </div>
      <MessageBar />
    </section>
  );
};
export default Main;
