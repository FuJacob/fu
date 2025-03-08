import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";

const ContactMessages = () => {
  return (
    <>
      <GrayMessage message="Hey! Thanks for stopping by." />
      <BlueMessage message="No problem, what are some ways we can talk further?" />
      <GrayMessage>
        Feel free to shoot me a message at{" "}
        <a href="mailto:jacob.fu@uwaterloo.ca" className="text-iblue underline">
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
      <GrayMessage message="I’d love to chat!" />
      <GrayMessage message="😊" />
    </>
  );
};

export default ContactMessages;
