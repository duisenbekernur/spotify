import React from "react";
import "./App.css";

// components
import TheHeader from "./components/Header/TheHeader";
import TheMain from "./components/TheMain";
import TheSidebar from "./components/Sidebar/TheSidebar";
import TheSidebarOverlay from "./components/TheSidebarOverlay";
import TheRegistration from "./components/RegistrationBottom/TheRegistration";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
    <Counter/>
      <div className="flex flex-grow overflow-auto">
        <TheSidebar />
        <TheSidebarOverlay />

        <div className="flex-1 overflow-auto">
          <TheHeader />

          <TheMain />
        </div>
      </div>

      <TheRegistration />
    </>
  );
}

export default App;
