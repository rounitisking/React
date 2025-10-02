import React from 'react'
import UserContext from './userContext'

// yaha pr hamne ek wrapper create kiya hai kyuki agar nhi krte tho hame ane har child ko har baar wrap krna parta and by using the wrapper we create a reusable parent 
function UserContextProvider({children}) {
    const [user , setuser] = React.useState(null)
  return (
    //hame jo bhi data child ke sath share krna hai usse ham yaha pr denge 
    <UserContext.Provider value={{user ,setuser}}>

        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider