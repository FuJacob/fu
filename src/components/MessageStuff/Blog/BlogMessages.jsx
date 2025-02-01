import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import Experience from "./Blog";
import experiences from "../../../data/blog";

const BlogMessages = () => {
  return (
    <>
        {experiences.map((exp, index) => (
          <Experience exp={exp} key={index} />
        ))}
    </>
  );
};
export default BlogMessages;
