import React,{useState , useContext} from 'react'
import UserContext from '../context/userContext'
function Login() {
    const {setuser} = useContext(UserContext)
    const [username , setusername] = useState("")
    const [password , setpassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        

        setuser({username , password})

        
        
    }
  return (
    <div>

            {/* Exactly yehi concept hai:

value={username} → Input box hamesha React state ke saath bound hai.

Jab tum type karte ho → onChange me setUsername chal jata hai → state update hoti hai → React re-render karta hai → aur input box ke andar wahi updated value dikhti rehti hai.

Isliye isse bolte hain: Controlled Component (kyunki input React ke control me hai).

💡 Short me:
👉 User type kare → React state update ho → state wapas input me dikhe. */}


            <h1>LOGIN</h1>
            <input value={username} onChange={(e)=>{setusername(e.target.value)}} type='text' placeholder='username'/>
            {" "}
            <input value={password} onChange={(e)=>{setpassword(e.target.value)}}  type='text' placeholder='password'/>
            {" "}
            <button onClick={handleSubmit}>click to submit</button>
    </div>
  )
}

export default Login