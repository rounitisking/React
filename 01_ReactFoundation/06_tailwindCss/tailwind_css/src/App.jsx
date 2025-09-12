//every tag in the jsx is the closing tag 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

     <h1 className ='m-20'> Creating of reusable components in react</h1>


      <Card username = "rounit singh" discription="I have two mother, one of them is 80 years old" btnTxt="click to see my mother photo" views="5"/>
      <Card username = "ajay" discription="I am the father of rounit singh" btnTxt="click to see my photo" views="10"/>
      <Card username = "rinki" discription="I am the first mother of rounit singh" btnTxt="click to see my photo" views="100"/>
      <Card username = "dadi" discription="I am the secnd mother of rounit singh and i am 80 years old" btnTxt="click to see my photo" views="200"/>
    </>
  )
}

export default App
