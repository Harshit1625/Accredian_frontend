import { useContext } from "react";
import { Context } from "../context/ModalContext";


const Button = () => {
  const context = useContext(Context);

  function handleClick(){
    context.setOpen(true)
  }
  
  return (
    <div>
      <button onClick={handleClick} className="p-1 lg:p-3 bg-blue-400 mt-2 w-full text-white rounded text-[5px] md:text-[9px] lg:text-[10px] font-semibold hover:text-blue-400 hover:bg-white hover:border hover:border-blue-400 transition-all">
        Refer & Earn
      </button>
    </div>
  );
};

export default Button;
