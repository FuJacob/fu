import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import Experience from "./Blog";
import experiences from "../../../data/blog";

const BlogMessages = () => {
  let counter = 1;
  const timeGap = 2;
  return (
    <>
      <GrayMessage
        message="here's my blog its not really complete"
        order={(counter += timeGap)}
      />
      <GrayMessage
        message="if you want to know why i made my website like this, its because i thought it would make me unique"
        order={(counter += timeGap)}
      />
      <GrayMessage message="idk lol" order={(counter += timeGap)} />
    </>
  );
};
export default BlogMessages;
