import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let[counter,setCounter]=useState(0)


//  let counter = 5;
 const addValue = ()=>{
  console.log("clicked" ,counter);
  // counter = counter+1;
  if(counter==20){
    setCounter(counter);
  }else
  setCounter(counter+1);
 } 
 

 const removeValue=()=>{
  console.log("removed",counter);
  if(counter==0){
    setCounter(counter);
  }else
  setCounter(counter-1);
 } 
 
 

  return (
    <>
      <h1>Chai or react</h1>
      <h3>Counter Value: {counter}</h3>

      <button 
      onClick={addValue}>Add Value</button>
       <br/><br/>
      <button onClick={removeValue}>Remove Value</button>
      

    </>
  )
}

export default App
