import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageOpen, setPageOpen] = useState("home");

  return (
    <AppContext.Provider value={{ pageOpen, setPageOpen }}>
      {children}
    </AppContext.Provider>
  );
};
