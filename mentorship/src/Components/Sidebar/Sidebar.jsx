import React, { useState } from 'react';
import dashboard from "../Images/dashboard.png"
import person from "../Images/bussiness-man.png"
import suit from "../Images/suitcase.png"
import barchart from "../Images/bar-chart.png"
import advert from "../Images/advertising.png"
import "../../style/sidebar.css"
const Sidebar=(props)=> {

    const [items,setItems] =useState([{
        img:person,
        name:"Botech developments"
    },{
        img:barchart,
        name:"Ads Manager"
    },{
        img:advert,
        name:"Ad Center"
    },{
        img:suit,
        name:"Meta Business Suite"
    },{
        img:dashboard,
        name:"Professional dashboard"
    }])

    return (
        <div id="Sidebar">
         { items.map((item,index)=> <div key={index} className={"itemContainer"}>
                 <img src={item.img} alt="" />   
                 <h2 className="h2" >{item.name}</h2>
            </div>) 
        }
        <hr className='hr' />
        </div>
    );
}

export default Sidebar;