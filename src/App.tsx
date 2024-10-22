import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  return (
    <div className="app">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <NavBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  );
}

export default App;
