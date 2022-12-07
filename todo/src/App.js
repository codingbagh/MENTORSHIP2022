import { useState } from 'react';
import './App.css';

const ChildComponent =(props)=>{

  return(
    <div>
      <h1>{props.number}</h1>
    </div>
  )

}

const Button = ({setNumber,number})=>{
  return(
    <div>
      <button onClick={()=>setNumber(prev=>prev +5)}>Add</button>
    </div>
  )
}

const App=()=> {
const [number,setNumber] = useState(2)
const [number2,setNumber2]=useState(4)
  return (
    <> 
     <ChildComponent number={number}/>
      <Button setNumber={setNumber} number={number}/>
 
     </>
   
  );
}

export default App;
