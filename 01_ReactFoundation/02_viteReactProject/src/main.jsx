// in vite we are importing the main.jsx file direct into the index.html file but in cae of CRA and webpack we use react script to inject the js in html
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

// if i pass this reactEle into the render it will not accept it bcz it has syntax in which it accepts bcz this element is not created in the syntax of react
const reactEle = {
    type : 'a',
    props : {
        href : 'http://google.com',
        target : "_blank"
    },
    children : 'click me to visit google'
}


const anotherUser = "rounit singh"

const ReactELE = React.createElement(
  'a' , {
    href : "http://googl.com",
    target : "_blank"
  },
  "click me to visit google",
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App/>
  // </StrictMode>
  ReactELE
)
