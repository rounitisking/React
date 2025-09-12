import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from "./component/Buttons.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-amber-50 rounded flex justify-center items-center"> 
            <Buttons color ="yellow" name="yellow"/>
            <Buttons color ="red"name="red"/>
            <Buttons color ="pink" name="pink"/>
            <Buttons color ="white" name="white"/>
            <Buttons color ="blue" name="blue"/>
            <Buttons color ="green" name="green"/>
            <Buttons color ="purple" name="purple"/>
            <Buttons color ="olive" name="olive"/>
            <Buttons color ="gray" name="gray"/>
            <Buttons color ="lavender" name="lavender"/>
            <Buttons name="black"/>
        </div>
    </>
  )
}

export default App
