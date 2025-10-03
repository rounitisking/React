// when we make a react app from CRA we ussually defiine the env variable as REACT_APP_VARIABLE..NAME and we access it by porcess.env.ENV_VARIABLE_NAME   -- but this wokr only in CRA
// when we create a react app with vite we define the env variable name as VITE_VARIABLE..NAME  and we access it by import.meta.env.ENV_VARIABLE _NAME

import { useState } from 'react'
import config from './config/config'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      a blog app with appwirte
    </>
  )
}

export default App
