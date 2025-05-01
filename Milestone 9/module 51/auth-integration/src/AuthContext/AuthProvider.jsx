import React, { useEffect, useState } from "react";
import { AuthContext } from "./Auth-Context";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const AuthProvider = ({children}) => {
  const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
    const unSubsribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
      })
      return ()=>{
        unSubsribe()
      }
    
  },[])
  

  const userInfo = { createUser,singInUser,user,loading };

  return (
    <>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
