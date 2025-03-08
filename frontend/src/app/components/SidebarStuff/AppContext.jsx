import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageOpen, setPageOpen] = useState("home");
    const [menuOpen, setMenuOpen] = useState(true);


  return (
    <AppContext.Provider value={{ pageOpen, setPageOpen, menuOpen, setMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
};
