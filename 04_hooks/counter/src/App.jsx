// react wokrs on simplle principple where react says that if the variable is chnaged in the js its ok but if you wat to change the variable in the ui then that will be controlled by react
// Hooks ::

//useState is used to changes the state in the ui
//here inside the usestate it gives to values which are accepted in the array -- counter and setcounter --  here counter is the variable we need to change and setcounter is the function which is used to change the value of the counter


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  let counter = 5
  const increment = ()=>{

    if(count < 20){
      setCount(count++)
    }
    else{
      console.log("value has croessed the limit 20")
    }
  }
  const decrement = ()=>{
    if(count > 0){
      setCount(count--)
    }
    else{
      console.log("value has croessed the limit 0")
    }
  }
  return (
    
    <>
      <h1> incr/ dcr : {count}</h1>

      <button onClick={increment}>incr</button>
      <button onClick={decrement}>dcr</button>
      
      <p>footer : {count}</p>
    </>
  )
}

export default App
