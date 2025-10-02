/*
What is useCallback?

In React, functions are recreated on every render.

Sometimes, you want to reuse the same function instance (not a new one each time) → for performance reasons or to prevent unnecessary re-renders of child components.

useCallback is a React hook that returns a memoized version of a function. 

What are dependencies?

The array [dependencies] tells React when to re-create the function.

If none of the dependencies change → React will reuse the old function.

If any dependency changes → React will create a new function.
*/

import { useState , useCallback , useEffect , useRef } from 'react'

import './App.css'

function App() {
  let pass = ""
  let str = "ABCDefghEFGHIJKLMNOPQRSTUVWXYZabcdijklmnopqrstuvwxyz"
  for(let i =0; i < 8 ; i++){
              let num = Math.floor(Math.random()*10)
              pass += str[num]

            }
  

  const [length, setLength] = useState(8)
  const [numberAllow , setNumberAllow] = useState(false)
  const [charAllow , setcharAllow] = useState(false)
  const [pwdInput , setPwdInput] = useState(pass)
  // use of the reference hook -- useref hook ka use ham tab krte hai jab hame kisi element ka reference cahiye hota hai
  const pwdRef = useRef(null)

  
  // yahi ek method hai jo pwd ko generate kr rhe hai but ek middleware fucntion hai jo har click pe uss method ko call kr rhe hai 
  // useCallback is a react hook that lets you cachd a fucntion definition between re-renders

  const pwdGenerator = useCallback(()=>{
          const btn= document.getElementById("copyBtn")
          btn.style.backgroundColor = "grey"
          btn.innerHTML = "copy"

          let pass = ""
          let str = "ABCDEklmnopqFGHIJKLMNOPQRSTUVWXYZabcdefghijrstuvwxyz"
          let char = ")(*&^%$#@!"


          if(numberAllow && !(charAllow)){
            
            pass += String(Math.floor(Math.random()*10))
            for(let i =0; i < length - 2 ; i++){
              let num = Math.floor(Math.random()*10)
              pass += str[num]

            }
            pass += String(Math.floor(Math.random()*10))
            
          }
          else if(charAllow && !(numberAllow)){
            pass += String(char[Math.floor(Math.random()*10)])
            for(let i =0; i < length - 2; i++){
              let num = Math.floor(Math.random()*10)
              pass += str[num]
              
            }
            pass += String(char[Math.floor(Math.random()*10)])
          }
          else if(numberAllow && charAllow){
            pass += String(Math.floor(Math.random()*10))
            pass += String(char[Math.floor(Math.random()*10)])
            for(let i =0; i < length - 4 ; i++){
              let num = Math.floor(Math.random()*10)
              pass += str[num]
              
            }
            pass += String(char[Math.floor(Math.random()*10)])
            pass += String(Math.floor(Math.random()*10))
          }
          else{
            for(let i =0; i < length ; i++){
              let num = Math.floor(Math.random()*10)
              pass += str[num]

            }

            }

          setPwdInput(pass)


          //maine yaha pe setPwdInput diya hai na ki PwdInput aisa iss liye hia ki call har change ko monitor krta hai tho ham pwd ko ek baar bh change karenge vo loop mai fas jayega kyuki haar baar password change ho raha hai and vo har baar usse monitor kr raha hai 
  }, [length , numberAllow , charAllow , setPwdInput])


  // ham log yaha pr yeh kr rhe hai ki hame ek hook cahiye jo ye kaam kre ki jab bhi koi input field ko hilaye tho vo hook pwd generator method ko call krde -- which is (useEffect hook)
  // use effect mai ham 
  useEffect(()=>{
    pwdGenerator()
  }, [length , numberAllow, charAllow, pwdGenerator])


//writing the code to copy pwd to the clipboard
  const CopyPwdToClipboard = useCallback(()=>{
    const btn= document.getElementById("copyBtn")
      btn.style.backgroundColor = "blue"
      btn.innerHTML = "copied"
      window.navigator.clipboard.writeText(pwdInput)
      
  }, [pwdInput])


  return (
    <>
            <h1 className="mb-20 text-white"> password Generator</h1>

           
        <div className = "gap bg-black rounded-full p-15">

          {/* this is the div of the container where the password will be shown and copied */}
            <div className="flex justify-center p-3  gap-3">
              <div className="m-3 w-150 h-10 bg-white text-orange-500 text-2xl font-bold text-center rounded-full">
                {/* password input box */}
                    {pwdInput}
                </div>
                <button id={"copyBtn"} onClick={CopyPwdToClipboard} className="m-3 px-4 py-2 text-white bg-blue-700 rounded-full">
                  copy
                  </button>
              </div>

                {/* this is the div of the container in which we are cahing the configuration of the password */}

                <div className="pl-8 flex justify-left p-3  gap-20">

                  <label className="text-orange-500">
                    <input onChange={(e)=>setLength(e.target.value)} type="range" min={8} max={26} /> lenght : {length}
                    </label>

                  <label className="text-orange-500">
                    <input type="checkbox" onChange={()=>setNumberAllow(!numberAllow)} /> Number
                    </label>

                  <label className="text-orange-500">
                    <input type="checkbox" onChange={()=>setcharAllow(!charAllow)} /> Character
                    </label>
                  </div>

          </div>
    
    </>
  )
}

export default App
