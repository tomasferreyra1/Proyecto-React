// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfaPIIKVxwsdJdMLQPjEQ0H3LcWPgISwY",
  authDomain: "coderhouse-ecommerce-b5a91.firebaseapp.com",
  projectId: "coderhouse-ecommerce-b5a91",
  storageBucket: "coderhouse-ecommerce-b5a91.appspot.com",
  messagingSenderId: "1073023724648",
  appId: "1:1073023724648:web:68b4155f7574c449d35fdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos
export const db = getFirestore(app);

