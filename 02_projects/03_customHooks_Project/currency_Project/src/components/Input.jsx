import React, {useId} from "react"
function Input(
    {label = "default" , amount , amountChange , onCurrencyChange , onCurrencyOptions = [] , selectCurrency, amountDisable = false , currencyDisable = false}
) {

      const amountInputId = useId()

  return (
    <div className=" bg-[#FFFFFF] shadow-lg rounded-lg p-4 flex justify-center gap-120 mb-4 text-2xl ">
      <div className='text-black flex flex-col' >
          {/* <h3 className='mb-4'>{label}</h3> */}
          <label htmlFor={amountInputId} >
            {label}
          </label>
            {/* here value in the input field is used to fix the value of the input field wihch cannot be changed */}
            {/* value={amount} in <input>

                Jab aap sirf value={amount} likhte ho aur onChange nahi dete → input read-only ban jata hai.

                Matlab user type karega to box me change dikhai nahi dega, kyunki value React ke state se fix hai. */}
                {/* yaha pr hamne amount change mai check laga haiki agar value nhi mili tho kya krna hai and event ki value js mai string ke form mai aati hai  */}
          <input id={amountInputId} type='number' value={amount} disabled={amountDisable} onChange={(e)=> amountChange && amountChange(Number(e.target.value))}/>

      </div>
      <div className='text-black '>
          <h3 className='mb-4'>Currency Type</h3>
          <select disabled={currencyDisable} value={selectCurrency} className='bg-[#F3F3F6]' name='country' id='country' onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} >
                         {onCurrencyOptions.map((value)=>{

                      // agar ham yaha pr options mai value nhi denge tho -- jab ham select mai onchange karenge tho usko value nhi milgei,, ham options mai value is liye set krte hai taki select mai onchnage krte wakt options ki value mil sale 
                            return <option key={value} value={value}>{value}</option>
                         })}
          </select>
      </div>
  
</div>

  )
}

export default Input