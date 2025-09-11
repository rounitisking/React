// ham yaha pr yeh dekh rhe hai ki jab ham ko function ke andar jsx return krte hai tho react usse kaise dekhta hai , ham ussi tarah usse main mai paas karenge


function customRender(reactEle,container){

    //element is created 
    const domEle = document.createElement(reactEle.type)


    // here i am assigning the values in the dom created 
    // domEle.setAttribute('href'  , reactEle.props.href) 
    // domEle.setAttribute('target'  , reactEle.props.target) 
    // domEle.target = reactEle.props.target
    // domEle.innerHtml = reactEle.children
    
    
    //automating the process of setting the values in the dom
    domEle.innerHtml = reactEle.children
    
    for (let prop in reactEle.props){
        if(prop == children) continue
       domEle.setAttribute(prop , reactEle.props[prop])
    }



    // now i am injecting the created dom element in the html

    container.appendChild(domEle)
}

import App from "./App.jsx"
import { StrictMode } from "react"
import {createRoot} from 'react-dom/client'

// writing the elements like the react interpret them 
const reactEle = {
    type : 'a',
    props : {
        href : 'http://google.com',
        target : "_blank"
    },
    children : 'click me to visit google'
}

const container = document.getElementById('root')

customRender(reactEle ,container)


// createRoot.document.getElementById('root').render(
//     <StrictMode>
//         <App/>
//         </StrictMode>
// )
