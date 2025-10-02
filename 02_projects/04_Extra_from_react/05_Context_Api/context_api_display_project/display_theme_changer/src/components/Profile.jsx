import React, {useContext} from 'react'
import UserContext from '../context/userContext'
function Profile() {
    const {user} = useContext(UserContext)
    

  return (
    <div className='mt-10'>
        <h1>PROFILE</h1>
        <h2> Username : {user?user.username:""}</h2>
        <h2> Password : {user?user.password:""}</h2>

    </div>
  )
}

export default Profile