// login.js
import React, { useState } from 'react';
// import {auth }from '../config/firebase'; 
import {  auth } from '../../config/firebase';
import {firebase} from '../socialMedia/GoogleLogin';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const Login = () => {

    const [phone, setPhone] = useState('+91');
    const [hasFilled, setHasFilled] = useState(false);
    const [otp, setOtp] = useState('');
  
    const generateRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        }
      }, auth);
    }
  
    const handleSend = (event) => {
      event.preventDefault();
      setHasFilled(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, `+91 ${phone}`, appVerifier)
        .then((confirmationResult) => {
            console.log('confirmationResultconfirmationResult',confirmationResult)
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
        }).catch((error) => {
          // Error; SMS not sent
          console.log(error);
        });
    }
    
    const verifyOtp = (event) => {
      let otp = event.target.value;
      setOtp(otp);
  
      if (otp.length === 6) {
        // verifu otp
        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(otp).then((result) => {
          // User signed in successfully.
          console.log('jjjjjj',result)
          let user = result.user;
          console.log(user);
          alert('User signed in successfully');
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert('User couldn\'t sign in (bad verification code?)');
        });
      }
    }
  
    if(!hasFilled){
      return (
        <div >
          {/* <Card sx={{ width: '300px'}}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <h1 sx={{ padding: '20px'}} variant='h5' component='div'>Enter your phone number</h1>
              <form onSubmit={handleSend}>
                <TextField sx={{ width: '240px'}} variant='outlined' autoComplete='off' label='Phone Number' value={phone} onChange={(event) => setPhone(event.target.value)} />
                <Button type='submit' variant='contained' sx={{ width: '240px', marginTop: '20px'}}>Send Code</Button>
              </form>
            </CardContent>
          </Card> */}
          <h1>Enter your phone number</h1>
          <div>
            <input  label='Phone Number' value={phone} onChange={(event) => setPhone(event.target.value)} style={{width:'200px'}}/>
            <button type='submit' onClick={(e) => handleSend(e)} style={{width:'100px'}}>Send Code</button>
          </div>
          <div id="recaptcha"></div>
        </div>
      ) 
    } else {
      return (
        <div >
          {/* <Card sx={{ width: '300px'}}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <Typography sx={{ padding: '20px'}} variant='h5' component='div'>Enter the OTP</Typography>
                <TextField sx={{ width: '240px'}} variant='outlined' label='OTP ' value={otp} onChange={verifyOtp} />
            </CardContent>
          </Card> */}
          <h1>Enter the OTP</h1>
          <input label='OTP ' value={otp} onChange={verifyOtp} style={{width:'200px'}}/>
          <div id="recaptcha"></div>
        </div>
      )
    }
  }
  

export default Login;
