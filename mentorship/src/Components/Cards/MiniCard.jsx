import { Add, PlusOneRounded } from "@mui/icons-material"
import { useState } from "react"
import "../../style/minicard.css"
import BOTECH from "../Images/BOTECHLOGO.png"
const Minicard = ()=>{
    const [isEnter,setIsEnter]=useState(false)
    return(<div onMouseEnter={()=>(setIsEnter(true))} onMouseLeave={()=>setIsEnter(false)}  className="minicardContainer">
        <img className={isEnter && "img"} src={BOTECH} alt="" />
        <section id="addBack">
            <Add id="add"/>
            <span>Create Story</span>
       { isEnter &&    <div className="overlay">
                
            </div>}
        </section>
    </div>)
}



export default Minicard