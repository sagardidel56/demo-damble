import React, { useState, useRef } from "react";
import "./otp.css"
const OtpInput = () => {
  const [otp, setOtp] = useState(["", "", "", "","",""]);
  const inputRefs = useRef([]);

  const handleOtpChange = (e, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = e.target.value;
    setOtp(updatedOtp);

    if (e.target.value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && index > 0 && event.target.value === '') {
        inputRefs.current[index - 1].focus();
    }
  };
  const handleKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
console.log('otpp',otp)
  const handleVerifyOtp = (event) => {
    const otpValue = otp.join("");
    // Perform verification logic here
  
        // let otp = event.target.value;
        // setOtp(otp);
    
        if (otpValue.length === 6) {
          // verifu otp
          let confirmationResult = window.confirmationResult;
          confirmationResult?.confirm(otpValue).then((result) => {
            // User signed in successfully.
            console.log('jjjjjj',result)
            let user = result.user;
            console.log(user);
            setOtp("")
            alert('User signed in successfully');
            // ...
          }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            setOtp("")
            alert('User couldn\'t sign in (bad verification code?)');
          });
        }
      
    console.log("Verifying OTP:", otpValue);
  };

  return (
    <>
    <div className="otp-container">
    {otp?.map((digit, index) => (
      <input
        key={index}
        type="text"
        maxLength={1}
        value={digit}
        onChange={(e) => handleOtpChange(e, index)}
        onKeyDown={(event) => handleKeyDown(event, index)}
        onKeyPress={handleKeyPress}
        ref={(ref) => (inputRefs.current[index] = ref)}
        className="otp-input"
      />
    ))}
  </div>
    <button type='button'onClick={handleVerifyOtp}>Verify OTP</button>
    </>
  );
};

export default OtpInput;
