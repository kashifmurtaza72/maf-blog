// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "maf-blog.firebaseapp.com",
  projectId: "maf-blog",
  storageBucket: "maf-blog.appspot.com",
  messagingSenderId: "715951737473",
  appId: "1:715951737473:web:29b98d97694fd75fac1b80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);