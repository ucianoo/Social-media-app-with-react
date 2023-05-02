// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVGclTRtLiZpECZFHdc8LKLEvzxPN7Lac",
  authDomain: "react-project-f6086.firebaseapp.com",
  projectId: "react-project-f6086",
  storageBucket: "react-project-f6086.appspot.com",
  messagingSenderId: "397205109143",
  appId: "1:397205109143:web:5905f162ee4f7042ff2cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export  const db = getFirestore(app)