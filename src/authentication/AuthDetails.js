import React from 'react'
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { useState,useEffect } from 'react'
import auth from './firebase'





function AuthDetails() {

    const [authUser,setAuthUser] = useState(null)
    useEffect(() =>{
        const listen = onAuthStateChanged(auth,(user) => {
            if(user) setAuthUser(user)
            else setAuthUser(null)
        })
        return () => {listen()}
    }, [])

    const userSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("sign out")
        })
        .catch(error => console.log(error))
    }

  return (
    <div>
        weee
        { authUser ? <> <p> {`sign in as ${authUser.email}`} </p>  <button onClick={userSignOut}> sign out</button></> :<p>sign in</p>}

        
    </div>
  )
}

export default AuthDetails