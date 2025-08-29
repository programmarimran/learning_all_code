// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfa4D_hAaVjf7iitP_n6mBhiVXWaL8p98",
  authDomain: "explore-email-and-pass.firebaseapp.com",
  projectId: "explore-email-and-pass",
  storageBucket: "explore-email-and-pass.firebasestorage.app",
  messagingSenderId: "18575308964",
  appId: "1:18575308964:web:8649ad477b667e0cbdce31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);