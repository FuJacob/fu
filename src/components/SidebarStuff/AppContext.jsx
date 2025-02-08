import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageOpen, setPageOpen] = useState("about");
    const [menuOpen, setMenuOpen] = useState(false);


  return (
    <AppContext.Provider value={{ pageOpen, setPageOpen, menuOpen, setMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
};
