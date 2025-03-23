import { useState } from 'react';

import './App.css';

function App() {

  //react hooks
  let [counter,setCounter] = useState(0)

// let counter =2;

    

    const addValue = ()=>{
      
      
      // if(counter>19){
      //   alert("you have reached the limit")
      //       return;
      // }
      // setCounter(++counter)
      setCounter((prevCounter)=>{return prevCounter+1})
      setCounter((prevCounter)=>{return prevCounter+1})
      setCounter((prevCounter)=>{return prevCounter+1})
      setCounter((prevCounter)=>{return prevCounter+1})
    }

    const removeValue=()=>{
      if(counter<1){
        alert("You cannot decrease value after 0")
        return
      }
      setCounter(counter-1)
    }
  return (
    <>
      <h1>Chai aur React!</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
