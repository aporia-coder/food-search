import React, { createContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = () => {
  return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
