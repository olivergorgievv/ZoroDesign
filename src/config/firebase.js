// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0AD0n4py3Ytq3EhyfjtCA0aUIbgy0wd8",
  authDomain: "zonodesign-91178.firebaseapp.com",
  projectId: "zonodesign-91178",
  storageBucket: "zonodesign-91178.appspot.com",
  messagingSenderId: "1097123109769",
  appId: "1:1097123109769:web:e3c17488094927d96e9f58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Google Login
export const googleProvider = new GoogleAuthProvider();

// initialize firestore database
export const db = getFirestore(app);
