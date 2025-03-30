import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";

const AboutMessages = () => {
  let counter = 1;
  const timeGap = 2;
  return (
    <>
      <GrayMessage
        message="here's a pic of me eating food"
        order={(counter += timeGap)}
      />
      <GrayMessage order={(counter += timeGap)}>
        <img
          src="avatar2.JPG"
          className="object-cover rounded-xl h-64 w-64 object-[50%_0%]"
          alt="picture of me eating food"
        />
      </GrayMessage>
      <GrayMessage
        message="im currently studying cs and finance at waterloo"
        order={(counter += timeGap)}
      />
      <GrayMessage
        message="in my free time i like to go to hackathons, but i usually end up failing my math quizzes after "
        order={(counter += timeGap)}
      />
      <GrayMessage
        message="i also like playing volleyball, ping-pong, and also going to poker club sometimes"
        order={(counter += timeGap)}
      />
      <GrayMessage order={(counter += timeGap)}>
        but yah that's basically it
      </GrayMessage>
    </>
  );
};

export default AboutMessages;
