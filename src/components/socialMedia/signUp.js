import React, {Component}  from "react";
import {auth }from '../config/firebase'; 
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { getAPI, postAPI } from "../../service/apiInstance";

function SignUp (props) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
    async function  createUserWithEmailAndPasswordF(){
            // if password is more than 8 characters long
            if (password.length>=8){
              console.log("password lenght correct")
            }else{
              console.log("password should be at least 8 characters long")
              return
            }
          try {

            const  userCredential= await  createUserWithEmailAndPassword(auth, email, password)
              
                // Signed in 
                const user = userCredential.user;
                const body = {
                  email : userCredential._tokenResponse.email,
                  //  expiresIn : userCredential._tokenResponse.expiresIn ,         
                  idToken:userCredential._tokenResponse.idToken,
                  localId:userCredential._tokenResponse.localId,
                  refreshToken:userCredential._tokenResponse.refreshToken
                  
                }
                const res = await postAPI('user/register-user',body)
                console.log('resresres',body)
                // ...
                console.log("uscreated", userCredential)
                }
          catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          };
          }
        const onChangeHandlerP = event => {
          setPassword(event.target.value);
       };
       const onChangeHandlerE = event => {
        setEmail(event.target.value);
     };
      // Initialize Firebase Authentication and get a reference to the service


        return(<div><h1> {props.mode}</h1>
      <input onChange={onChangeHandlerE} value={email} type="email" placeholder="email"></input>
      <br></br>
        <input onChange={onChangeHandlerP} value={password} type="password" placeholder="password"></input>
        <br/>
        <button onClick={createUserWithEmailAndPasswordF}>Sign Ups</button>
        </div> );

    
  }

  export default SignUp;