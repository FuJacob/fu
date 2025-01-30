import MessageBar from "./MessageBar";
import BlueMessage from "./BlueMessage";
import GrayMessage from "./GrayMessage";
import ExperiencesPage from "./Experiences/ExperiencesMessages";
import { useState } from "react";
const Main = () => {
  const [page, setPage] = useState("home");
  
  return (
    <section className="bg-primary w-2/3 flex flex-col items h-screen">
      <div className="fixed relative top-0 right-0 bg-secondary p-4">
        <div className="flex gap-2 text-txt text-sm">
          <p>To: </p>
          <h1 className="text-white">Hiring Manager</h1>
        </div>
      </div>
      <ExperiencesPage />
      <MessageBar />
    </section>
  );
};
export default Main;
