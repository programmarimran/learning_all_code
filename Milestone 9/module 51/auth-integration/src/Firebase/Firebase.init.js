//Do not  share this code
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ_b3bP_0VyukKT7bkTZx6pEyULSDvX9k",
  authDomain: "auth-integration-8896d.firebaseapp.com",
  projectId: "auth-integration-8896d",
  storageBucket: "auth-integration-8896d.firebasestorage.app",
  messagingSenderId: "103100788381",
  appId: "1:103100788381:web:d5db18c04447aa3c2fae74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);