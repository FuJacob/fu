const Page = ({
  title = "Home",
  tagline = "Welcome and quick introduction",
}) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <a href="" className="flex bg-red-600 w-12 h-12 p-2 rounded-full" />
      </div>

      <div className="flex flex-col text-txt w-4/5 border-b-2 border-lsecondary h-16 gap-1">
        <div className="flex w-full justify-between text-sm">
          <h1 className="font-bold text-white ">{title}</h1> <h2>21:56</h2>
        </div>
        <p className="text-xs">{tagline}</p>
      </div>
    </div>
  );
};
export default Page;