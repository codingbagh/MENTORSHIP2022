import {Nav} from "./Components/Nav/Nav";
import "./App.css";
import { useState,useEffect } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { Card } from "./Components/Cards/Card";






function App() {

 
  // alert(number)

  
  useEffect(()=>console.log("Effect"))
useLayoutEffect(()=>console.log("Layout"))
  return (
    <div className={"mainContainer"}>
      <Nav/>
      <div className="Container">
       <Sidebar/>
       <Card/>
        
   
      </div>

   
    </div>
  );
}

export default App;
