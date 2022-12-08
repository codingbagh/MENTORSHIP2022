import { Bookmark, VideoCameraBack } from "@mui/icons-material";

import { useEffect, useState } from "react";
import "../../style/card.css";
import Minicard from "./MiniCard";

export const Card = () => {
    const [click1,setClick1] = useState(true)
    const [click2,setClick2] = useState(false)

   
//  useEffect(()=>(setClick2(true),setClick1(false)))
  return (
    <div className="cardContainer">
      <div className="btns">
        <button onClick={()=>(setClick1(true),setClick2(false))} className={click1 && "buttonIsActive"}>
      
          <Bookmark id="iconsActive" /> Stories
        </button>
        <button className={click2 && "buttonIsActive"} onClick={()=>(setClick2(true),setClick1(false))}>
          <VideoCameraBack id="iconsActive"  /> Reels
        </button>
      </div>

      {click1 && <Minicard/>
}
 {click2 &&     <h1>Reels</h1>}
    </div>
  );
};
