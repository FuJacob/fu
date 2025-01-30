const GrayMessage = ({
  message = "Hi this is a sample message by Jacob Fu. Here we will talk about a lot of different things like how I love eating food etc etc.",
}) => {
  return <div className="text-sm bg-lsecondary rounded-2xl w-1/2 p-3">{message}</div>;
};
export default GrayMessage;
