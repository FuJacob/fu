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
          <GrayMessage key={index} className="">
            <img
              src={project.imgUrl}
              alt={project.title}
              className="object-cover w-96 h-64 rounded-lg shadow-md mt-2 border border-gray-300"
            />
          </GrayMessage>

          {/* Project Description */}
          <GrayMessage>
            <p>
              <strong>{project.title}</strong>: {project.des}{" "}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                (View Project)
              </a>
            </p>
          </GrayMessage>

          {/* Technologies Used */}
          <GrayMessage message={`Technologies: ${project.stack.join(", ")}`} />
        </>
      ))}
    </>
  );
};

export default ProjectsMessages;
