import { Bookmark, VideoCameraBack } from "@mui/icons-material";
import { useState } from "react";
import "../../style/card.css";

export const Card = () => {
    const [click1,setClick1] = useState(true)
    const [click2,setClick2] = useState(false)
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

      {click1 && <h1>Stories</h1>
}
 {click2 &&     <h1>Reels</h1>}
    </div>
  );
};
