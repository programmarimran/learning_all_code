// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5-HNwGDBDtGhSbV7_pMZlJ5JS335o2V0",
  authDomain: "simple-firebase-auth2-1d4fc.firebaseapp.com",
  projectId: "simple-firebase-auth2-1d4fc",
  storageBucket: "simple-firebase-auth2-1d4fc.firebasestorage.app",
  messagingSenderId: "941641870002",
  appId: "1:941641870002:web:9799d9026f0344fc2577ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);