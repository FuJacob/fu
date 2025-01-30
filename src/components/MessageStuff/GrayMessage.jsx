const GrayMessage = ({
  message = "Hi this is a sample message by Jacob Fu. Here we will talk about a lot of different things like how I love eating food etc etc.",
}) => {
  return (
    <div className="inline-block text-sm bg-lsecondary rounded-2xl w-fit max-w-md p-3">
      {message}
    </div>
  );
};

export default GrayMessage;
