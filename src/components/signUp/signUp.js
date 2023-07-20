import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { postAPI } from "../../service/apiInstance";
import { auth } from "../../config/firebase";
import SignIn from "../signIn/signIn";
// import { GoogleLogin } from "../../pages/socialMedia/GoogleLogin";
import { GoogleLogin } from "../socialMedia/GoogleLogin";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { MetaMasks } from "../../pages/socialMedia/metaMask";
import { errorToaster, succesToaster } from "../../utils/toaster";
import Otp from "./otp";
import OtpInput from "./otp";

function SignUp() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    phone: "",
  });
  const [error, setemailErr] = useState("");
  const [passworderr, setPassworderr] = useState("");
  const [Active, setActive] = useState(true);
  const [phoneerr, setphoneErr] = useState("");
  const [open, setopen] = useState(false);
  const [optid, setotpid] = useState('')
  // const [phoneActive, setActivephone] = useState(false);
  const [showGoogleLogin, setShowGoogleLogin] = useState(false);
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  // regex.test(password);
  async function createUserWithEmailAndPasswordF() {
    // if password is more than 8 characters long
    if (values.password.length === 0) {
      return setPassworderr("please enter password");
    } else if (values.password.length < 8) {
      return setPassworderr("password should be at least 8 characters long");
    }
    if (emailPattern.test(values.email)) {
      console.log("Email is valid");
      // setemailErr("Email is valid")
      setemailErr("");
    } else if (values.email == "") {
      return setemailErr("please enter email");
    } else {
      console.log("Email is invalid");
      return setemailErr("Email is invalid");
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // Signed in
      const user = userCredential.user;
      const body = {
        email: userCredential._tokenResponse.email,
        //  expiresIn : userCredential._tokenResponse.expiresIn ,
        idToken: userCredential._tokenResponse.idToken,
        localId: userCredential._tokenResponse.localId,
        refreshToken: userCredential._tokenResponse.refreshToken,
        password: values.password,
      };
      const res = await postAPI("user/register-user", body);
      console.log("resresres", res);
      succesToaster(res.data.message);
      // ...
      console.log("uscreated", userCredential);
      setValues({
        email: "",
        password: "",
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message.substr(9, 30);

      errorToaster(errorMessage);
      // ..
    }
  }
  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log("namenamename", name);
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    if (value.length === 0) {
      setemailErr("");
      setPassworderr("");
    } else if (emailPattern.test(values.email)) {
      setemailErr("");
    }
  };
  console.log("password", values.phone);
  console.log("eamaActiveActiveil", Active);
  useEffect(() => {
    setActive((prev) => !prev);
  }, []);
  const handleGoogleLoginClick = () => {
    setShowGoogleLogin(true);
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  };

  const handleSend = (e) => {
    e.preventDefault();
    generateRecaptcha();
    const { phone } = values;
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91 ${phone}`, appVerifier)
      .then((confirmationResult) => {
        console.log("confirmationResultconfirmationResult", confirmationResult);
        succesToaster("OTP SENT!");
        console.log(confirmationResult.verificationId, 'mmm')
        setotpid(confirmationResult.verificationId)
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error);
        errorToaster("Something Went Wrong!!");
        // window.recaptchaVerifier.render().then(function (widgetId) {
        //   appVerifier.reset(widgetId);
        // });
      });
  };
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    // return regex.test(password);
  };

  const handleChanges = (e) => {
    const passwordValue = e.target.value;
    setValues({
      ...values,
      password: passwordValue,
    });

    if (passwordValue.length > 0) {
      // if (passwordValue.length < 8) {

      if (validatePassword(passwordValue)) {
        setPasswordError("");
      } else {
        // setPasswordError("Password must contain at least one lowercase letter, one uppercase letter, and one number.");
      }
    }
    else {
      setPasswordError("");
    }
  };
  return (
    <div>
      <div
        className="modal fade ragisterModal"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close btnClose"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row align-itemscenter">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="dambleUser d-flex px-sm-0 px-4">
                        <img src="assets/img/modalImg1.png" alt />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="userName fw-bolder text-white text-center mt-4">
                        WELCOME TO DAMBLE <br />{" "}
                        <span className="fw-normal">
                          YOUR GAMING JOURNEY STARTS NOW
                        </span>{" "}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row align-items-center mx-0 mt-md-5">
                        <div className="col">
                          <div className="line" />
                        </div>
                        <div className="col-auto">
                          <div className="logoLine d-flex justify-content-center">
                            <img src="assets/img/whitelogo.png" alt />
                          </div>
                        </div>
                        <div className="col">
                          <div className="line" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form className="row mx-0 form gap-3">
                    <div className="col-12 fw-bold text-white registerHeading mb-3 d-lg-block d-none">
                      Sign Up
                    </div>
                    <div className="col-12">
                      <ul className="pills d-flex align-items-start mb-0 ps-0">
                        <li className="casinoPill w-50">
                          <a
                            // href="#exampleModal"
                            onClick={() => {
                              // setActive((prev) => !prev);
                              setActive(true);
                              // setActivephone(false);
                            }}
                            className={`pillAnchor ${Active ? "active" : ""
                              } d-flex align-items-center justify-content-center`}
                          // data-bs-toggle="modal"
                          // data-bs-target="#exampleModal"
                          >
                            Email{" "}
                          </a>
                        </li>
                        <li className="casinoPill w-50">
                          <a
                            // href="javascript:;"
                            onClick={() => {
                              setActive(false);
                              // setActivephone((prev) => !prev);
                              // setActivephone(true)
                            }}
                            // data-bs-toggle="modal"
                            // data-bs-target="#exampleModal1"
                            className={`pillAnchor ${Active ? "" : "active"
                              } d-flex align-items-center justify-content-center`}
                          >
                            Phone number{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    {Active ? (
                      <>
                        <div className="col-12">
                          <input
                            type="text"
                            name="email"
                            className="form-control border-0 shadow-none"
                            id="exampleForm2"
                            value={values.email}
                            placeholder="Email"
                            onChange={(e) => handleChange(e)}
                          />
                          <p style={{ color: "red" }}>{error}</p>
                        </div>
                        <div className="col-12 position-relative">
                          <input
                            type={open ? "text" : "password"}
                            name="password"
                            className="form-control border-0 shadow-none"
                            id="exampleForm4"
                            placeholder="Login Password"
                            value={values.password}
                            onChange={handleChanges}
                          />
                          <p style={{ color: "red" }}>{passwordError}</p>
                          <div className="eye">
                            <img
                              src="assets/img/eyeIcon.png"
                              alt
                              className="mb-3"
                              onClick={() => setopen((prev) => !prev)}
                            />
                          </div>
                        </div>
                        <div className="col-12 my-2">
                          <input
                            type="text"
                            className="form-controll border-0 shadow-none"
                            id="exampleForm4"
                            placeholder="Enter Referral/Promo Code "
                          />
                        </div>
                        <div className="col-12 mx-md-0 mx-auto">
                          <div className="form-check d-flex align-items-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="kk"
                            />
                            <label htmlFor="kk" className="form-check-label">
                              I agree to the <span>User Agreement</span> &amp;
                              Confirm I am at least 18 years old
                            </label>
                          </div>
                          <div className="col-12 mx-auto">
                            <button
                              type="button"
                              className="btn ragisterBtn w-100 border-0"
                              onClick={createUserWithEmailAndPasswordF}
                            >
                              Sign Up
                            </button>
                          </div>
                          <div className="col-12">
                            <div className="para">
                              Already have an account?{" "}
                              <a href="javascript:;" className="paraAnchor">
                                Sign Up
                              </a>{" "}
                              Log in directly with
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row align-items-center justify-content-center mt-5">
                              <div
                                // href="javascript:;"
                                className="col-auto d-flex pe-0"
                              >
                                <div className="link">
                                  {
                                    <GoogleLogin>
                                      <img src="assets/img/link1.png" alt />
                                    </GoogleLogin>
                                  }
                                </div>
                              </div>
                              <a
                                href="javascript:;"
                                className="col-auto d-flex pe-0"
                              >
                                <div className="link">
                                  <img src="assets/img/link2.png" alt />
                                </div>
                              </a>
                              <a
                                href="javascript:;"
                                className="col-auto d-flex"
                              >
                                <div className="link">
                                  <img src="assets/img/link3.png" alt />

                                  {/* {
                                      <MetaMasks>
                                        <img src="assets/img/link3.png" alt />
                                      </MetaMasks>
                                    } */}
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : !optid ?
                      <>
                        <div className="col-12">
                          <input
                            type="text"
                            name="phone"
                            className="form-control border-0 shadow-none"
                            id="exampleForm2"
                            value={values.phone}
                            placeholder="Enter phone number"
                            onChange={(e) => {
                              if (e.target.value.length > 10) {
                                setphoneErr("number must be 10 digit");
                              } else if (e.target.value.length === 10) {
                                setphoneErr("");
                              }
                              setValues({ ...values, phone: e.target.value });
                            }}
                          />
                          <p style={{ color: "red" }}>{phoneerr}</p>
                        </div>
                        <div className="col-12 mx-md-0 mx-auto">
                          <div className="form-check d-flex align-items-center">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="kk"
                            />
                            <label htmlFor="kk" className="form-check-label">
                              I agree to the <span>User Agreement</span> &amp;
                              Confirm I am at least 18 years old
                            </label>
                          </div>
                          <div className="col-12 mx-auto">
                            <button
                              type="button"
                              id="recaptcha"
                              className="btn ragisterBtn w-100 border-0"
                              onClick={(e) => {
                                // alert("herer");
                                handleSend(e);
                              }}
                            >
                              Get Otp
                            </button>
                          </div>
                          <div className="col-12">
                            <div className="para">
                              Already have an account?{" "}
                              <a href="javascript:;" className="paraAnchor">
                                Sign Up
                              </a>{" "}
                              Log in directly with
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row align-items-center justify-content-center mt-5">
                              <div
                                // href="javascript:;"
                                className="col-auto d-flex pe-0"
                              >
                                <div className="link">
                                  {
                                    <GoogleLogin>
                                      <img src="assets/img/link1.png" alt />
                                    </GoogleLogin>
                                  }
                                </div>
                              </div>
                              <a
                                href="javascript:;"
                                className="col-auto d-flex pe-0"
                              >
                                <div className="link">
                                  <img src="assets/img/link2.png" alt />
                                </div>
                              </a>
                              <a
                                href="javascript:;"
                                className="col-auto d-flex"
                              >
                                <div className="link">
                                  <img src="assets/img/link3.png" alt />

                                  {/* {
                                        <MetaMasks>
                                          <img src="assets/img/link3.png" alt />
                                        </MetaMasks>
                                      } */}
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </> :
                      (<>
                        <OtpInput />
                      </>
                      )}
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="modal-footer">
          <div class='footerImg'><img src={ModalFooter} alt='ModalFooter' /></div>
          </div> */}
        </div>
      </div>
      <SignIn />
    </div>
  );
}

export default SignUp;
