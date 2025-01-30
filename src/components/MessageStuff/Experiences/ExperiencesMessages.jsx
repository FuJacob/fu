import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import Experience from "./Experience";
import experiences from "../../../data/experience";

const ExperiencesMessages = () => {
  return (
    <div className="text-white p-4 flex flex-col justify-start gap-2 w-full flex-grow overflow-y-auto">
      <h1>iMessage</h1>
      <GrayMessage message="Hi! My name is Jacob, I'm so excited for this interview." />
      <BlueMessage message="Hey Jacob, nice to meet you too! My name is Hiring Manager, and I'll be interviewing you today." />

      {/* <GrayMessage message="So let's get started! Can you tell me about time at PetMap?" />

      <BlueMessage message="Sure! I was a Software Developer at PetMap from May 2023 to Present. During that time, I worked on several impactful projects, including the development of a pet tracking platform using React and Node.js. Some of the key tasks I handled were:" />
      <BlueMessage message="- Developing the platform’s front-end and back-end functionality." />
      <BlueMessage message="- Developing the platform’s front-end and back-end functionality." />
      <BlueMessage message="- Developing the platform’s front-end and back-end functionality." /> */}

      {/* <GrayMessage message="Awesome! It sounds like you had a significant impact there. Now, tell me about your time at the 1000 Islands Gananoque Chamber of Commerce." /> */}

      {experiences.map((exp, index) => (
        <Experience exp={exp} key={index} />
      ))}
    </div>
  );
};
export default ExperiencesMessages;
