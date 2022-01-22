import { createContext, useState } from "react";

export const ContextProviderTwo = createContext();

export const ContextTwo = (props) => {
  const [yes, setYes] = useState(true);
  return (
    <div>
      <ContextProviderTwo.Provider value={[yes, setYes]}>
        {props.children}
      </ContextProviderTwo.Provider>
    </div>
  );
};
