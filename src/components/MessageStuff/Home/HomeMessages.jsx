import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import MessageBar from "../MessageBar";

const HomeMessages = () => {
  return (
    <>
      <GrayMessage message="Hey there 👋" />

      <GrayMessage message="I'm Jacob" />

      <GrayMessage message="I'm a UWaterloo student studying CS and Finance" />
      <GrayMessage>
        You can contact me directly at{" "}
        <a
          href="mailto:jacob.fu@uwaterloo.ca"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          jacob.fu@uwaterloo.ca
        </a>
      </GrayMessage>

      <GrayMessage>
        You can also find me on{" "}
        <a
          href="https://www.linkedin.com/in/fujacob"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          LinkedIn
        </a>
      </GrayMessage>
      <GrayMessage>
        Or check out more of my work on{" "}
        <a
          href="https://github.com/FuJacob"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          GitHub
        </a>
        .
      </GrayMessage>
      <GrayMessage message="Have a nice day" />
      <GrayMessage message="~ J." />
    </>
  );
};
export default HomeMessages;
