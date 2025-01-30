import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageOpen, setPageOpen] = useState("about");

  return (
    <AppContext.Provider value={{ pageOpen, setPageOpen }}>
      {children}
    </AppContext.Provider>
  );
};
