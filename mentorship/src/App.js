import Nav from "./Components/Nav/Nav";
import "./App.css";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";




function App() {

  return (
    <div className={"mainContainer"}>
      <Nav/>
      <div className="Container">
       <Sidebar/>
      </div>

     
    </div>
  );
}

export default App;
