import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import Experience from "./Experience";
import experiences from "../../../data/experience";

const AboutMessages = () => {
  return (
    <div className="text-white p-4 flex flex-col justify-start gap-2 w-full flex-grow overflow-y-auto">
      <h1>iMessage</h1>
      <GrayMessage message="Hi! My name is Jacob, I'm so excited for this interview." />
      <BlueMessage message="Hey Jacob, nice to meet you too! My name is Hiring Manager, and I'll be interviewing you today." />
    </div>
  );
};
export default AboutMessages;
