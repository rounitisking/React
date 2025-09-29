//defining the custom hooks

import { useEffect , useState } from "react";


function useCurrecyInfo (currencyInfo){
    const [data , setData] = useState({})
    useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyInfo}.json`)
            .then(res => res.json())
            .then(res => {
                return setData(res[currencyInfo])
            })
    } , [currencyInfo])
    
   
    return data
}

export default useCurrecyInfo

