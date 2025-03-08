import Page from "./Page";
import Pinned from "./Pinned";
import ControlButtons from "./ControlButtons";
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
const Sidebar = () => {
  const { setPageOpen, pageOpen } = useContext(AppContext);

  return (
    <section className="hidden md:block h-2/3 bg-secondary/95 w-1/3 space-y-2 rounded-tl-2xl rounded-bl-2xl">
      <ControlButtons />

      <Pinned />

      {/* ALL THE PAGES */}
      <button onClick={() => setPageOpen("home")} className="w-full">
        <Page />
      </button>

      <button onClick={() => setPageOpen("about")} className="w-full">
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

      <button onClick={() => setPageOpen("contact")} className="w-full">
        <Page title="Contact" tagline="Get in touch with me" type="contact" />
      </button>
    </section>
  );
};
export default Sidebar;
