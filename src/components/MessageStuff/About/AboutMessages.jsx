import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";

const AboutMessages = () => {
  return (
    <>
      <GrayMessage message="Hey! Thanks for stopping by." />
      <BlueMessage message="Hey Jacob! Nice site—tell me about yourself." />
      <GrayMessage>
        <img
          src="avatar.png"
          className="object-cover rounded-xl h-96 w-64"
          alt="picture of me"
        />
      </GrayMessage>
      <GrayMessage message="I'm a CS & Finance student at the University of Waterloo aiming to make an impact on the technology people use today." />
      <GrayMessage message="I solve problems using my building blocks of design and development to make the world a better place. To me, learning is a lifelong journey and it never stops." />
      <GrayMessage message="When I'm not studying or working on fun projects, you can find me hitting around a volley-ball with my friends, or watching Youtube." />
      <BlueMessage message="Sweet! Where can I find more of your work?" />
        <GrayMessage>
        Check out my <a>projects</a> page or shoot me a message at{" "}
        <a href="mailto:jacob.fu@uwaterloo.ca" className="text-iblue underline">
          jacob.fu@uwaterloo.ca
        </a>{" "}
        — I’d love to chat!
      </GrayMessage>
    </>
  );
};

export default AboutMessages;
