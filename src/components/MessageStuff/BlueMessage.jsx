const BlueMessage = ({
  message = "Hi this is a sample message by Jacob Fu. Here we will talk about a lot of different things like how I love eating food etc etc.",
}) => {
  return (
    <div className="text-sm bg-iblue rounded-2xl w-1/2 p-3 ml-auto">{message}</div>
  );
};
export default BlueMessage;
