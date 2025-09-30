
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import { Login , Profile} from './components/index'
function App() {
  

  return (
    <UserContextProvider>

        <h2>in this project we are learning about the context api</h2>

      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
