import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Main from "./components/MessageStuff/Main";
import Sidebar from "./components/SidebarStuff/Sidebar";
function App() {
  return (
    <>
      <main className="flex flex-row min-h-screen">
        <Sidebar />
        <Main />
      </main>
    </>
  );
}

export default App;
