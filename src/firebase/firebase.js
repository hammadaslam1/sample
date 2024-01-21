// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEzz4hWciqiiaP9iioVREJYt8LP5wFYnY",
  authDomain: "sample-6e3c9.firebaseapp.com",
  databaseURL: "https://sample-6e3c9-default-rtdb.firebaseio.com",
  projectId: "sample-6e3c9",
  storageBucket: "sample-6e3c9.appspot.com",
  messagingSenderId: "635776299414",
  appId: "1:635776299414:web:03fcef83ff6c2ffe982db7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
export {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  auth,
  database,
};
