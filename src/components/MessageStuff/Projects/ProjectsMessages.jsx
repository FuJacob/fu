import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import projects from "../../../data/portfolio.js"; // Import your projects array

const ProjectsMessages = () => {
  return (
    <>
      <GrayMessage message="Here are some of the projects I've worked on!" />
      {projects.map((project, index) => (
        <>
          {/* Project Image */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {" "}
            <GrayMessage key={index} className="">
              <img
                src={project.imgUrl}
                alt={project.title}
                className="object-cover w-96 h-64 rounded-lg shadow-md mt-2 border border-gray-300 hover:scale-105 
                hover:opacity-60 transform transition-transform duration-500"
              />
            </GrayMessage>
          </a>

          {/* Project Description */}
          <GrayMessage>
            <p>
              <strong>{project.title}</strong>: {project.des}{" "}
            </p>
          </GrayMessage>
        </>
      ))}
    </>
  );
};

export default ProjectsMessages;
