import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import MessageBar from "../MessageBar";

const HomeMessages = () => {
  let counter = 1;
  const timeGap = 2;
  return (
    <>
      <GrayMessage message="hi there 👋" order={(counter += timeGap)} />

      <GrayMessage message="i'm jacob" order={(counter += timeGap)} />
      <GrayMessage message="here's a pic of me" order={(counter += timeGap)} />

      <GrayMessage order={(counter += timeGap)}>
        <div className="overflow-hidden">
          <img
            src="avatar4.JPG"
            className="w-56 h-56 rounded-3xl object-[100%_50%] object-cover"
          />
        </div>
      </GrayMessage>

      <GrayMessage
        message="i'm currently studying cs & finance at waterloo"
        order={(counter += timeGap)}
      />
      <GrayMessage order={(counter += timeGap)}>
        email me at{" "}
        <a
          href="mailto:jacob.fu@uwaterloo.ca"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          jacob.fu@uwaterloo.ca
        </a>
      </GrayMessage>

      <GrayMessage order={(counter += timeGap)}>
        or check me out at other stuff like{" "}
        <a
          href="https://www.linkedin.com/in/fujacob"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          LinkedIn
        </a> {" "}
        and{" "}
        <a
          href="https://github.com/FuJacob"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          GitHub
        </a>
      </GrayMessage>
      <GrayMessage
        message="if you ever want to talk, just send me a message through the message bar 😉"
        order={(counter += timeGap)}
      />
    </>
  );
};
export default HomeMessages;
