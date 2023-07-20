import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { postAPI } from "../../service/apiInstance";
// import { GoogleLogin } from "../../pages/socialMedia/GoogleLogin";
import { GoogleLogin } from "../socialMedia/GoogleLogin";
// import { MetaMasks } from "../../pages/socialMedia/metaMask";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { errorToaster, succesToaster } from "../../utils/toaster";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import { useSignInModal } from "../../hooks/useSignInModal";
import { useBtAuth } from "../../hooks/useBtAuth";
import { useAuth } from "../../hooks/useAuth";

const validationSchema = Yup.object({
  emailOrNumber: Yup.string()
    .required("this field is required")
    .matches(
      /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$|^(\+\d{1,3}\s?)?[\d-]{10,}$/i,
      "Invalid email or mobile number"
    ),
  password: Yup.string().required(),
});

function SignIn() {
  const [phone, setPhone] = useState("+91");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");
  const [phoneerrmsg, setphonemsg] = useState("");
  const { isSignInOpen, setIsSignInOpen } = useSignInModal();
  const { btToken, setBtToken } = useBtAuth()
  const { token, setToken } = useAuth()
  // const [open, setopen] = useState(false)
  const [open, setopen] = useState(false);
  const initialValue = {
    emailOrNumber: "",
    password: "",
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

  const handleSend = (event) => {
    // event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91 ${phone}`, appVerifier)
      .then((confirmationResult) => {
        console.log("confirmationResultconfirmationResult", confirmationResult);
        succesToaster("OTP SENT!");
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error);
        errorToaster("Something Went Wrong!!");
      });
    setIsSignInOpen(false);
  };
  console.log("bbbb", phone);


  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // verifu otp
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          console.log("jjjjjj", result);
          let user = result.user;
          console.log(user);
          alert("User signed in successfully");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert("User couldn't sign in (bad verification code?)");
        });
    }
  };
  async function signInWEAP(values) {
    try {

      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.emailOrNumber,
        values.password
      );

      // Signed in
      const body = {
        email: values.emailOrNumber,
        password: values.password
      };
      const user = userCredential.user.auth.email;
      const res = await postAPI("user/login-user", body);
      console.log("res==>>>>", res)

      if (res?.data?.success) {
        setBtToken(res?.data?.message?.betByToken)
        setToken(res?.data?.message?.auth_token)
        setIsSignInOpen(false)
      } else {
        errorToaster("something went wrong, try Again")
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    };
  }

  return (
    <>
      <div
        className={`modal fade ragisterModal ${isSignInOpen ? "show" : ""}`}
        id="exampleModal"
        tabIndex={-1}
        style={{
          display: isSignInOpen ? "block" : "none",
        }}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close btnClose"
                onClick={() => setIsSignInOpen(false)}
              // data-bs-dismiss="modal"
              // aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row align-itemscenter">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="dambleUser d-flex px-sm-0 px-4 dambleUser1">
                        <img src="assets/img/modalImg1.png" alt />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="userName fw-bolder text-white text-center mt-4">
                        WELCOME TO DAMBLE <br />
                        <span className="fw-normal">
                          YOUR GAMING JOURNEY STARTS NOW
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row mx-0 align-items-center mt-md-5">
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
                  <Formik
                    initialValues={initialValue}
                    // validate={validationSchema}
                    validationSchema={validationSchema}
                    // onSubmit={Handler}
                    onSubmit={(values) => {
                      console.log(values, "kkkkkk");
                      signInWEAP(values);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleSubmit,
                      handleChange,
                      handleBlur,
                    }) => (
                      <Form
                        className="row mx-0 form gap-3"
                        onSubmit={handleSubmit}
                      >
                        <div className="col-12 fw-bold text-white registerHeading mb-3 d-lg-block d-none">
                          Sign In
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control border-0 shadow-none"
                            id="exampleForm2"
                            placeholder="Email\Phone number"
                            value={values.emailOrNumber}
                            onBlur={handleBlur}
                            name="emailOrNumber"
                            onChange={handleChange}
                          // onChange={(event) => handle(event)}
                          />
                          {/* <p style={{ color: "red", fontSize: 10 }}>{phoneerrmsg}</p> */}
                          <ErrorMessage>
                            {errors.emailOrNumber &&
                              touched.emailOrNumber &&
                              errors.emailOrNumber}
                          </ErrorMessage>
                        </div>
                        <div className="col-12 position-relative">
                          <input
                            type={open ? "text" : "password"}
                            name="password"
                            className="form-control border-0 shadow-none"
                            id="exampleForm4"
                            placeholder="Login Password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <div className="eye">
                            <img src="assets/img/eyeIcon.png" className="mb-1" onClick={() => setopen(prev => !prev)} alt />
                            {/* <img
                              src="assets/img/eyeIcon.png"
                              className="mb-1"
                              onClick={() => setopen((prev) => !prev)}
                              alt
                            /> */}
                          </div>

                          <ErrorMessage>
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </ErrorMessage>
                        </div>

                        <div className="col-12 forget d-flex justify-content-end text-white">
                          {" "}
                          Forgot your Password?
                        </div>
                        <div className="col-12 mx-auto">
                          <button
                            type="sumbit"
                            className="btn ragisterBtn w-100 border-0"
                          // onClick={(e) => handleSend(e)}
                          // onClick={handleSubmit}
                          >
                            Sign In
                          </button>
                        </div>
                        <div className="col-12">
                          <div className="para1">
                            New to DAMBLE ?{" "}
                            <a
                              href="javascript:;"
                              // data-bs-toggle="modal"
                              // data-bs-target="#exampleModal1"
                              className="paraAnchor"
                              onClick={() => setIsSignInOpen(false)}
                            >
                              Create account
                            </a>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row align-items-center justify-content-center topMargin">
                            <a
                              href="javascript:;"
                              className="col-auto d-flex pe-0"
                            >
                              <div className="link">
                                {/* <img src="assets/img/link1.png" alt /> */}
                                {
                                  <GoogleLogin>
                                    <img src="assets/img/link1.png" alt />
                                  </GoogleLogin>
                                }
                              </div>
                            </a>
                            <a
                              href="javascript:;"
                              className="col-auto d-flex pe-0"
                            >
                              <div className="link">
                                <img src="assets/img/link2.png" alt />
                              </div>
                            </a>
                            <a href="javascript:;" className="col-auto d-flex">
                              <div className="link">
                                <img src="assets/img/link3.png" alt />
                                {/* {
                                    <MetaMasks>
                                      <img src="assets/img/link3.png" alt />{" "}
                                    </MetaMasks>
                                  } */}
                              </div>
                            </a>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="modal-footer">
          <div class='footerImg'><img src={ModalFooter} alt='ModalFooter' /></div>
          </div> */}
      </div>
    </>
  );
  // return (
  //   <div
  //     className="modal fade ragisterModal"
  //     id="exampleModal"
  //     tabIndex={-1}
  //     aria-labelledby="exampleModalLabel"
  //     aria-hidden="true"
  //   >
  //     <div className="modal-dialog modal-dialog-centered">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <button
  //             type="button"
  //             className="btn-close btnClose"
  //             data-bs-dismiss="modal"
  //             aria-label="Close"
  //           />
  //         </div>
  //         <div className="modal-body">
  //           <div className="row align-itemscenter">
  //             <div className="col-lg-6 mb-lg-0 mb-4">
  //               <div className="row">
  //                 <div className="col-12">
  //                   <div className="dambleUser d-flex px-sm-0 px-4 dambleUser1">
  //                     <img src="assets/img/modalImg1.png" alt />
  //                   </div>
  //                 </div>
  //                 <div className="col-12">
  //                   <div className="userName fw-bolder text-white text-center mt-4">
  //                     WELCOME TO DAMBLE <br />{" "}
  //                     <span className="fw-normal">
  //                       YOUR GAMING JOURNEY STARTS NOW
  //                     </span>{" "}
  //                   </div>
  //                 </div>
  //                 <div className="col-12">
  //                   <div className="row mx-0 align-items-center mt-md-5">
  //                     <div className="col">
  //                       <div className="line" />
  //                     </div>
  //                     <div className="col-auto">
  //                       <div className="logoLine d-flex justify-content-center">
  //                         <img src="assets/img/whitelogo.png" alt />
  //                       </div>
  //                     </div>
  //                     <div className="col">
  //                       <div className="line" />
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="col-lg-6">
  //               <form className="row mx-0 form gap-2">
  //                 <div className="col-12 fw-bold text-white registerHeading mb-2 d-lg-block d-none">
  //                   Sign In
  //                 </div>
  //                 <div className="col-12">
  //                   <input
  //                     type="number"
  //                     className="form-control border-0 shadow-none"
  //                     id="exampleForm2"
  //                     placeholder="Phone number"
  //                     value={phone}
  //                     onChange={(event) => handle(event)}
  //                   />
  //                   <p style={{ color: "red" }}>{phoneerrmsg}</p>
  //                 </div>
  //                 <div className="col-12 position-relative">
  //                   <input
  //                     type="text"
  //                     className="form-control border-0 shadow-none"
  //                     id="exampleForm4"
  //                     placeholder="Login Password"
  //                   />
  //                   <div className="eye">
  //                     <img src="assets/img/eyeIcon.png" alt />
  //                   </div>
  //                 </div>
  //                 <div className="col-12 forget d-flex justify-content-end text-white">
  //                   {" "}
  //                   Forgot your Password?
  //                 </div>
  //                 <div className="col-12 mx-auto">
  //                   <button
  //                     type="button"
  //                     className="btn ragisterBtn w-100 border-0"
  //                     onClick={(e) => handleSend(e)}
  //                   >
  //                     Sign In
  //                   </button>
  //                   <div id="recaptcha"></div>
  //                 </div>
  //                 <div className="col-12">
  //                   <div className="para1">
  //                     New to DAMBLE ?{" "}
  //                     <a href="javascript:;" className="paraAnchor">
  //                       Create account
  //                     </a>
  //                   </div>
  //                 </div>
  //                 <div className="col-12">
  //                   <div className="row align-items-center justify-content-center ">
  //                     <a href="javascript:;" className="col-auto d-flex pe-0">
  //                       <div className="link">
  //                         {
  //                           <GoogleLogin>
  //                             <img src="assets/img/link1.png" alt />
  //                           </GoogleLogin>
  //                         }
  //                       </div>
  //                     </a>
  //                     <a href="javascript:;" className="col-auto d-flex pe-0">
  //                       <div className="link">
  //                         <img src="assets/img/link2.png" alt />
  //                       </div>
  //                     </a>
  //                     <a href="javascript:;" className="col-auto d-flex">
  //                       <div className="link">
  //                         {
  //                           <MetaMasks>
  //                             <img src="assets/img/link3.png" alt />{" "}
  //                           </MetaMasks>
  //                         }
  //                       </div>
  //                     </a>
  //                   </div>
  //                 </div>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {/* <div class="modal-footer">
  // <div class='footerImg'><img src={ModalFooter} alt='ModalFooter' /></div>
  // </div> */}
  //   </div>
  // );
}

export default SignIn;
