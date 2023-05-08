
import React from 'react'
import { useState } from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'




function Signpage() {
    const [email,setEmail] = useState("")
    const[password,setPassword] = useState("")


    // sign
    const signIn = (e) => {

        e.preventDefault()
        //the auth part
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((err) => console.error(err))
    }
    return (
    <div>

       <form onSubmit={signIn}>
        <input type="text" placeholder='enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        
        ></input>
        <br/>
        {/* password */}
        <input type="password" placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.password)}
        ></input>
        <button type='submit'>Log in</button>
       </form>
    </div>
  )
}

export default Signpage