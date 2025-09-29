// in this project we will be learning about the api calls and fetching the data from it 

import { useState } from 'react'

import './App.css'
import Input from './components/Input'
import useCurrecyInfo from "./hooks/useCurrencyInfo"
function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertAmount, setconvertAmount] = useState(0)

  const currencyInfo = useCurrecyInfo(from)
  // console.log(currencyInfo)


    // this is the option for the select tag in the component
  const options = Object.keys(currencyInfo)
  // console.log(options)

  const swap = ()=>{
    setfrom(to)
    setTo(from)
    setamount(Number(convertAmount))
    setconvertAmount(Number(amount))
  }

  //converting the values 
  const convert = ()=>{
    // yaha pr ham [] isliye use kr rhe hai to find the value from the object kyuki to ek variable hai and ham dot notation ka use tab krte hai jab hamari key fixed ho na ki ek variable 
    setconvertAmount(currencyInfo[to] * amount)
  }
  return (
    <>
      <div className=' p-10  rounded backdrop-blur-sm'>

        <Input label= "From" amount={amount} onCurrencyOptions={options} selectCurrency={from} onCurrencyChange={(currency)=>{setfrom(currency)}}  amountChange={(amt)=>{setamount(amt)}}/>
        
        <button onClick={swap} className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'> SWAP</button>


        <Input label= "To" amount={convertAmount} onCurrencyOptions={options} selectCurrency={to} onCurrencyChange={(currency)=>{setTo(currency)}}  amountChange={(amt)=>{setconvertAmount(amt)}}/>
       

        <button onClick={convert} className='w-full p-4 text-9xl bg-[#1C50CA] text-white rounded font-bold'>
          CONVERT {from.toUpperCase()} To {to.toUpperCase()}
        </button>
      </div>
    </>
  )
}

export default App
