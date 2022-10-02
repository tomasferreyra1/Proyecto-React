// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu6XEDTlhecsL6br57rxme1L-6d6-xpeU",
  authDomain: "react-eccomerce-coder.firebaseapp.com",
  projectId: "react-eccomerce-coder",
  storageBucket: "react-eccomerce-coder.appspot.com",
  messagingSenderId: "486821823893",
  appId: "1:486821823893:web:1ab207c38f85b08c8ea29c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);