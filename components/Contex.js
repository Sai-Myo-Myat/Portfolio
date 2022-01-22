import { createContext, useState } from "react";

export const ContextProvider = createContext();

export const Context = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <ContextProvider.Provider value={[menuOpen, setMenuOpen]}>
      {props.children}
    </ContextProvider.Provider>
  );
};
