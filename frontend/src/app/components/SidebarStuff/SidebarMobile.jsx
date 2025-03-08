import Page from "./PageMobile";
import Pinned from "./PinnedMobile";
import ControlButtons from "./ControlButtons";
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
const SidebarMobile = () => {
  const { setPageOpen, setMenuOpen, menuOpen, pageOpen } = useContext(AppContext);

  return (
    <section className="h-screen bg-secondary/95 space-y-4 rounded-tl-2xl rounded-bl-2xl overflow-y-auto">
      <div className="px-6 pt-8 flex justify-center items-center flex-row gap-4 h-24">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FaArrowLeft size={40} />
        </button>{" "}
        {/* Search Bar */}
        <div className="h-12 w-full bg-lsecondary text-txt rounded-lg h-12 p-2 flex gap-2 text-md items-center">
          <FaSearch size={20} />
          <h1 className="bg-lsecondary w-full">
            Welcome to Jacob Fu's Portfolio!
          </h1>
        </div>
      </div>

      <Pinned />

      {/* ALL THE PAGES */}
      <button onClick={() => setPageOpen("home")} className="w-full">
        <Page />
      </button>

      <button onClick={() => setPageOpen("about")} className={`${pageOpen == "home" && "bg-iblue"} w-full`} >
        <Page
          title="About"
          tagline="Learn more about me and my journey"
          type="about"
        />
      </button>
      <button onClick={() => setPageOpen("projects")} className="w-full">
        <Page
          title="Projects"
          tagline="A showcase of my best work"
          type="projects"
        />
      </button>

      <button onClick={() => setPageOpen("exp")} className="w-full">
        <Page
          title="Experience"
          tagline="My professional work history"
          type="exp"
        />
      </button>

      <button onClick={() => setPageOpen("blog")} className="w-full">
        <Page title="Blog" tagline="My thoughts over the years" type="blog" />
      </button>

      <button onClick={() => setPageOpen("contact")} className="w-full mb-12">
        <Page title="Contact" tagline="Get in touch with me" type="contact" />
      </button>
    </section>
  );
};
export default SidebarMobile;
