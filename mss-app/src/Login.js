import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import {auth,provider} from "./firebase"

function Login() {
      
  // SignIn Functionality
    const SignIn =() =>{
       auth.signInWithPopup(provider).then(res=>{

       }).catch((error)=>alert(error.message))
    }
     
  return (
    <div className="login">
         <div className="login-container">
           <img src="https://image.flaticon.com/icons/png/128/3437/3437364.png" />
           <div className="login-text">
              <h2>Sign in to Message Me </h2>
           </div>
           <Button onClick={SignIn} > Sign In With Google</Button>
         </div> 
    </div>
  )
}

export default Login