import {Nav} from "./Components/Nav/Nav";
import "./App.css";
import { useState,useEffect } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useLayoutEffect } from "react";
import { useRef } from "react";






function App() {
  const [isUser,setISUser] = useState(false)
  const [number,setNumber] = useState(1)
  const Button = useRef()
 
 
  // alert(number)

  
  useEffect(()=>console.log("Effect"))
useLayoutEffect(()=>console.log("Layout"))
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
