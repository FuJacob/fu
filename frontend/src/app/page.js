"use client";
import { useState, createContext } from "react";
import Main from "./components/MessageStuff/Main";
import Sidebar from "./components/SidebarStuff/Sidebar";
import { AppProvider } from "./components/SidebarStuff/AppContext";

export default function Home() {
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
          <main className="flex md:w-1/2 flex-row md:h-full h-screen shadow-2xl">
            <Sidebar />

            <Main />
          </main>
        </div>
      </AppProvider>
    </>
  );
}
