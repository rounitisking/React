import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home , About , Contact , User, Github , gitHubInfo} from "./components/index.js"
import Layout from "./Layout.jsx"

/*
router → define all routes (path → component mapping)

RouterProvider → gives this router to your app

Result → React app can navigate between multiple pages dynamically
*/

// const router = createBrowserRouter([
//   {
//     path:"/", 
//     element : <Layout />,
//     children: [
//       {path : "" ,element : <Home/>}, 
//       {path : "about" , element : <About/>},
//       {path : "contact", element : <Contact/>}
//     ]
//   }
  
  
// ])


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}></Route>
    <Route path='about' element={<About/>}>
      {/* <Route path='rounit'></Route>
      <Route path='singh'></Route> */}
    </Route>
    <Route path='contact' element={<Contact/>}></Route>
    <Route path='user/:user_id' element={<User/>}></Route>
    <Route loader={gitHubInfo} path='Github' element={<Github/>}></Route>

  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>
)
