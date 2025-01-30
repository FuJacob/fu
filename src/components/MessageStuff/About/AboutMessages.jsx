import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import Experience from "./Experience";
import experiences from "../../../data/experience";

const AboutMessages = () => {
  return (
     <>
        <GrayMessage message="Hi! My name is Jacob, I'm so excited for this interview." />
        <BlueMessage message="Hey Jacob, nice to meet you too! My name is Hiring Manager, and I'll be interviewing you today." />
     </>
  );
};
export default AboutMessages;
