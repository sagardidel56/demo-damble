// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCKSG76MtIMBrjBnJWTkx_sueAuzM8r528",
  authDomain: "damble-8f20f.firebaseapp.com",
  projectId: "damble-8f20f",
  storageBucket: "damble-8f20f.appspot.com",
  messagingSenderId: "792710425209",
  appId: "1:792710425209:web:426cd954d1396dc1dbc2a8",
  measurementId: "G-57WH5CWPN0"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase)
const provider = new GoogleAuthProvider();
export {auth,provider,firebase};