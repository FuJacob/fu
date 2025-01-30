import Page from "./Page";
import Pinned from "./Pinned";
import ControlButtons from "./ControlButtons";
const Sidebar = () => {
  return (
    <section className="p-4 bg-secondary w-1/3 space-y-6">
      <ControlButtons />

      <Pinned />

      {/* ALL THE PAGES */}

      <Page />
      <Page title="About" tagline="Learn more about me and my journey" />

      <Page title="Projects" tagline="A showcase of my best work" />

      <Page title="Experience" tagline="My professional work history" />

      <Page title="Blog" tagline="My thoughts over the years" />

      <Page title="Contact" tagline="Get in touch with me" />
      <Page title="Resume" tagline="View and download my resume" />
    </section>
  );
};
export default Sidebar;
