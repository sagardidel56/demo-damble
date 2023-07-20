import React, { useEffect, useState } from "react";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export function GoogleLogin({ children }) {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log("datttttta", data);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return <div>{<button type="button" style={{ background: 'transparent', border: 'none' }} onClick={handleClick} >{children}</button>}</div>;
}

