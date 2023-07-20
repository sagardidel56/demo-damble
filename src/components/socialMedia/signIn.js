import React, {Component}  from "react";
import {auth }from '../config/firebase'; 
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { postAPI } from "../../service/apiInstance";
function SignIn (props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
   async function signInWEAP(){
     const userCredential= await signInWithEmailAndPassword(auth, email, password)
  
    // Signed in 
    const body = {

    }
    const user = userCredential.user.auth.email    ;
    const res = postAPI('user/login-user',)
    console.log(userCredential,'kkkkkkkkkkkkkkkkkkk')
    console.log('user',user)
    // ...

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    const onChangeHandlerP = event => {
        setPassword(event.target.value);
     };
     const onChangeHandlerE = event => {
      setEmail(event.target.value);
   };
    return(
        <div><h1> {props.mode}</h1>
        <input onChange={onChangeHandlerE} value={email} type="email" placeholder="email"></input>
        <br></br>
          <input onChange={onChangeHandlerP} value={password} type="password" placeholder="password"></input>
          <br/>
          <button onClick={signInWEAP}>Sign In</button>
          </div>)
  }

  export default SignIn;