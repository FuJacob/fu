const MessageBar = () => {
    return (
      <div className="relative right-0 bottom-0 z-50 flex gap-4 w-full h-12 p-6 justify-center items-center">
        <div className="">
          <a href="" className="flex bg-red-600 w-6 h-6 p-2 rounded-full" />
        </div>
        <div className="border-2 w-4/5 border-lsecondary text-white flex items-center rounded-2xl h-8 p-2">
          IMessage
        </div>
        <div className="">
          <a href="" className="flex bg-red-600 w-6 h-6 p-2 rounded-full" />
        </div>
      </div>
    );
}
    
export default MessageBar;