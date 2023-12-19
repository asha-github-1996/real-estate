// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-e53cd.firebaseapp.com",
  projectId: "real-estate-e53cd",
  storageBucket: "real-estate-e53cd.appspot.com",
  messagingSenderId: "88918261052",
  appId: "1:88918261052:web:399789a09c4d2910503239",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
