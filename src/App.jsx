import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState, createContext } from "react";
import Main from "./components/MessageStuff/Main";
import Sidebar from "./components/SidebarStuff/Sidebar";
import { AppProvider } from "./components/SidebarStuff/AppContext";
function App() {
  const AppContext = createContext();
  return (
    <>
      <AppProvider className="w-full h-full">
        <main className="flex flex-row min-h-screen">
          <Sidebar />
          <Main />
        </main>
      </AppProvider>
    </>
  );
}

export default App;
