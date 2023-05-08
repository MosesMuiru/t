import React from 'react'
import auth from "./firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import { useState } from 'react'


function Newuser() {

    // firebase
    


const [email,setEmail] = useState("")
const[password,setPassword] = useState("")


    // sign
    const signIn = (e) => {

        e.preventDefault()
        //the auth part
        // signInWithEmailAndPassword(auth,email,password)
        // .then((userCredential) => {
        //     console.log(userCredential)
        // }).catch((err) => console.error(err))

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(error.message)
    console.log("nikuu")
    console.log(password)
    if(error == "auth/missing-password") alert("please provide a password")
    // ..
  });


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
        onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type='submit'>Log in</button>
       </form>
    </div>
  )
}

export default Newuser