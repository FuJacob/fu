import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import Experience from "../Experiences/Experience";
import experiences from "../../../data/experience";

const HomeMessages = () => {
  return (
    <div className="text-white p-4 flex flex-col justify-start gap-2 w-full flex-grow overflow-y-auto">
      <h1>iMessage</h1>
      <GrayMessage message="Hey there 👋" />

      <GrayMessage message="I'm Jacob" />

      <GrayMessage message="I'm a UWaterloo student studying CS and Finance" />

      <GrayMessage message="You can find me on X, Bluesky and GitHub" />

      <GrayMessage message="Or contact me directly at jacob.fu@uwaterloo.ca" />
      <GrayMessage message="Have a nice day" />
      <GrayMessage message="~ J." />

    </div>
  );
};
export default HomeMessages;
