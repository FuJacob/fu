import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
const Experience = ({ exp }) => {
  return (
    <>
      <h1 className="text-xs text-center text-txt">
        {exp.Date}
      </h1>
      {exp.me.map((point, index) => (
        <GrayMessage message={point} />
      ))}

      <BlueMessage message={exp.outro} />
      <GrayMessage message="TODO: FIX THIS THIS SECTION IS NOT DONE" />
    </>
  );
};
export default Experience;
