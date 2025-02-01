import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState, createContext } from "react";
import Main from "./components/MessageStuff/Main";
import Sidebar from "./components/SidebarStuff/Sidebar";
import { AppProvider } from "./components/SidebarStuff/AppContext";
function App() {
  return (
    <>
      <AppProvider>
        <div
          className="min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: "url(/bg.jpg)",
            backgroundSize: "cover",
          }}
        >
          <main className="flex w-full lg:w-1/2 flex-row h-full shadow-2xl transform transition-transform duration-500">
            <Sidebar />
            <Main />
          </main>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
