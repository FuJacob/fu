import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import { time } from "framer-motion";

const ContactMessages = () => {
  let counter = 1;
  const timeGap = 2;
  return (
    <>
      <GrayMessage
        message="hey thanks for checking out the site!"
        order={(counter += timeGap)}
      />
      <GrayMessage order={(counter += timeGap)}>
        feel free to shoot me a message at{" "}
        <a href="mailto:jacob.fu@uwaterloo.ca" className="text-iblue underline">
          jacob.fu@uwaterloo.ca
        </a>
      </GrayMessage>
      <GrayMessage order={(counter += timeGap)}>
        <div className="overflow-hidden">
          <img
            src="avatar3.png"
            className="object-cover rounded-xl h-64 w-64 object-[50%_0%]"
            alt="picture of me eating food"
          />
        </div>{" "}
      </GrayMessage>
      <GrayMessage order={(counter += timeGap)}>
        you can also find me on{" "}
        <a
          href="https://www.linkedin.com/in/fujacob"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          LinkedIn
        </a>
      </GrayMessage>
      <GrayMessage order={(counter += timeGap)}>
        or check out more of my work on{" "}
        <a
          href="https://github.com/FuJacob"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          GitHub
        </a>
      </GrayMessage>
      <GrayMessage order={(counter += timeGap)} message="I’d love to chat!" />
      <GrayMessage order={(counter += timeGap)} message="😊" />
    </>
  );
};

export default ContactMessages;
