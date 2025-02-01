import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import MessageBar from "../MessageBar";

const HomeMessages = () => {
  return (
    <>
        <GrayMessage message="Hey there 👋" />
  
        <GrayMessage message="I'm Jacob" />
  
        <GrayMessage message="I'm a UWaterloo student studying CS and Finance" />
  
        <GrayMessage message="You can find me on X, Bluesky and GitHub" />
  
        <GrayMessage message="Or contact me directly at jacob.fu@uwaterloo.ca" />
        <GrayMessage message="Have a nice day" />
        <GrayMessage message="~ J." />
    </>
  );
};
export default HomeMessages;
