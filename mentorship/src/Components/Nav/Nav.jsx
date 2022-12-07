import React from "react";
import "../../style/nav.css";
import facebookIcon from "../Images/facebook.png";
import search from "../Images/search.png";
import watchIcon from "../Images/facebookWatch.png"
import  gaming from "../Images/messenger.png"
import  menu from "../Images/hamburger.png"
import bell from "../Images/bell.png"
import man from "../Images/man.png"
import menu2 from "../Images/dots-menu.png"
import home from "../Images/home.png"

 

export function Nav(props) {
  return (
    <div id="navContainer">

        <div>
               <img src={facebookIcon} className="fbIcon" alt="" />
      <img src={search} className="searchIcon" alt="" />
        </div>
        <div className="middle">
        <img src={home} className="fbIcon2" alt="" />

        <img src={watchIcon} className="fbIcon2" alt="" />

        <img src={gaming} className="fbIcon2" alt="" />
        <img src={menu} className="fbIcon2" alt="" />
        </div>

        <div className="middle2">
        <img src={menu2} className="fbIcon3" alt="" />

        <img src={gaming} className="fbIcon3" alt="" />

        <img src={bell} className="fbIcon3" alt="" />
        <img src={man} className="fbIcon3" alt="" />
        </div>
   
    </div>
  );
}


