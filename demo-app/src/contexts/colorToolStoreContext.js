import React, { createContext, useContext } from "react";

import { useColorTool } from "../hooks/useColorTool";

const colorToolStoreContext = createContext();

export function ColorToolStoreProvider({ children }) {
  return (
    <colorToolStoreContext.Provider value={useColorTool()}>
      {children}
    </colorToolStoreContext.Provider>
  );
}

export function useColorToolStoreContext() {
  return useContext(colorToolStoreContext);
}
