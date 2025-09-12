//here we are using double brackets inside the style bcz React expects style to be a JavaScript object:

import React from 'react'

function Buttons({color="black" , name = "none"}) {
    const changeColor = ()=>{
        
        const body = document.querySelector("body") || ""
        
        body.style.backgroundColor  = `${color}`
        console.log(body.style.backgroundColor)
    }
  return (
    <button 
    className="m-3 rounded"
    style = {{backgroundColor : color}}
     onClick={changeColor}>{name} </button>
  )
}

export default Buttons