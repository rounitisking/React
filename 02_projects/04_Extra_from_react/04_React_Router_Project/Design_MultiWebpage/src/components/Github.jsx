import React, { useEffect , useState} from 'react'

function Github() {
    const [data , setdata] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/rounitisking')
        // here we are converting the json from string into the json
        .then((res)=>res.json())
        .then((res)=> setdata(res))
    } , [])

  return (
    <div className='text-center m-4 p-4 bg-amber-800 text-white'>
        {console.log(data)}
        <h3>  Github UserName : {data.login}</h3>
       <h3>Github Followers : {data.followers}</h3>
       <h3>Following : {data.following}</h3>
       <h3>Account Visibility : {data.user_view_type}</h3>
        <h3>Profile photo :</h3>
        <img className='w-20 h-20' src={data.avatar_url} alt="" />
        </div>
  )
}

export default Github