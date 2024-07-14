
import { createContext, useState } from "react";


export const Context = createContext();
// eslint-disable-next-line react/prop-types
const ModalContext = ({children}) => {
  const [open , setOpen] = useState(false);

  return <Context.Provider value={{open , setOpen}}>
    {children}
  </Context.Provider>;
};

export default ModalContext;
