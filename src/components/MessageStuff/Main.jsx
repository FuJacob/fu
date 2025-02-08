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
import SidebarMobile from "../SidebarStuff/SidebarMobile";
const Main = () => {
  const { pageOpen } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    setMenuOpen(!menuOpen);
  }, [pageOpen]);

  return (
    <section className="w-full md:w-2/3 flex flex-col h-full md:h-auto md:rounded-tr-2xl rounded-br-2xl">
      <div className="fixed relative top-0 right-0 bg-secondary/95 md:rounded-tr-2xl p-4">
        <div className="flex w-full items-center gap-2 text-txt  text-sm">
          <div className="md:hidden flex w-full justify-center items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="">
              <FaArrowLeft size={40} className="fixed left-6 top-6"/>
            </button>
            {menuOpen && (
              <div className="fixed absolute top-2 left-0 z-[50]">
                <SidebarMobile />
              </div>
            )}
            <div className="flex flex-col pt-4 gap-2 justify-center items-center">
              <img
                src="avatar.png"
                alt="avatar"
                className="md:hidden w-16 h-16 rounded-full"
              />
              <p>
                To:
                <span className="text-white"> Jacob Fu</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white p-4 flex flex-col justify-start gap-2 w-full h-96 grow overflow-y-auto bg-primary">
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
