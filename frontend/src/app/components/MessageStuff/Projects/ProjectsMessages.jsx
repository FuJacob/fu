import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import projects from "../../../data/portfolio.js"; // Import your projects array

const ProjectsMessages = () => {
  let counter = 1;
  const timeGap = 2;

  return (
    <>
      <GrayMessage
        message="here's some things i've worked on"
        order={(counter += timeGap)}
      />
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
            <GrayMessage key={index} order={(counter += timeGap)} >
              <img
                src={project.imgUrl}
                alt={project.title}
                className="object-cover w-24 h-24 rounded-lg shadow-md border border-gray-300 hover:scale-105 
                hover:opacity-60 transform transition-transform duration-500"
              />
            </GrayMessage>
          </a>


        </>
      ))}
    </>
  );
};

export default ProjectsMessages;
