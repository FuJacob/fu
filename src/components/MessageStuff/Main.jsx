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
    <section className="w-2/3 flex flex-col rounded-tr-2xl rounded-br-2xl">
      <div className="fixed relative top-0 right-0 bg-secondary/95 rounded-tr-2xl p-4">
        <div className="flex gap-2 text-txt text-sm">
          <p>To: </p>
          <h1 className="text-white">Jacob Fu</h1>
        </div>
      </div>
      <div className="text-white p-4 flex flex-col justify-start gap-2 w-full h-96 flex-grow overflow-y-auto bg-secondary">
        <h1 className="text-xs text-txt text-center">iMessage</h1>

        {pageOpen == "home" ? (
          <HomeMessages />
        ) : pageOpen == "exp" ? (
          <ExperiencesMessages />
        ) : pageOpen == "about" ? (
          <AboutMessages />
        ) : (
          <div className="flex flex-grow" />
        )}
      </div>
      <MessageBar />
    </section>
  );
};
export default Main;
