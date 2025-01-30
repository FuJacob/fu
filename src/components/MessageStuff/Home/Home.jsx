import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
const Home = ({ exp }) => {
  return (
    <>
      <h1 className="text-xs text-center text-txt">
        {exp.startDate} - {exp.endDate}
          </h1>
          <h1 className="text-9xl">hello</h1>
      <BlueMessage message={exp.intro} />

      {exp.me.map((point, index) => (
        <GrayMessage message={point} />
      ))}

      <BlueMessage message={exp.outro} />
    </>
  );
};
export default Home;
