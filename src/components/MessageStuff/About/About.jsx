import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
const About = ({ exp }) => {
  return (
    <>
      <h1 className="text-xs text-center text-txt">
        {exp.startDate} - {exp.endDate}
          </h1>
          <h1 className="text-9xl">hello</h1>
      <GrayMessage message={exp.intro} />

      {exp.me.map((point, index) => (
        <BlueMessage message={point} />
      ))}

      <GrayMessage message={exp.outro} />
    </>
  );
};
export default About;
