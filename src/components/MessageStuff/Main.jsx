import MessageBar from "./MessageBar";
import BlueMessage from "./BlueMessage";
import GrayMessage from "./GrayMessage";
import ExperiencesMessages from "./Experiences/ExperiencesMessages";
import AboutMessages from "./Home/HomeMessages";
import HomeMessages from "./Home/HomeMessages";
import { useState, useContext } from "react";
import { AppContext } from "../SidebarStuff/AppContext";
const Main = () => {
  const { pageOpen } = useContext(AppContext);

  return (
    <section className="bg-primary w-2/3 flex flex-col items h-screen">
      <div className="fixed relative top-0 right-0 bg-secondary p-4">
        <div className="flex gap-2 text-txt text-sm">
          <p>To: </p>
          <h1 className="text-white">Jacob Fu</h1>
        </div>
      </div>
      {pageOpen == "home" ? <HomeMessages /> : pageOpen == "exp" ? (
        <ExperiencesMessages />
      ) : pageOpen == "about" ? (
        <AboutMessages />
      ) : <div  className="flex flex-grow"/>}
      <MessageBar />
    </section>
  );
};
export default Main;
