import { FaRegEdit } from "react-icons/fa";

const ControlButtons = () => {
    return (
      <>
        <div className="flex items-center w-full justify-between py-2 mt-2 px-4">
          <div className="flex gap-2 h-6 items-center">
            <a href="" className="flex bg-red-600 w-3 h-3 rounded-full" />

            <a href="" className="flex bg-yellow-600 w-3 h-3 rounded-full" />

            <a href="" className="flex bg-green-600 w-3 h-3 rounded-full" />
          </div>

          <FaRegEdit size={20} color="white" />
        </div>
      </>
    );
}
export default ControlButtons;
    
