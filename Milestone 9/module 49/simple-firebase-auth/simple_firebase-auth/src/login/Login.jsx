import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
const Login = () => {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user)
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn=()=>{
    const githubProvider=new GithubAuthProvider();
    signInWithPopup(auth,githubProvider)
    .then(result=>{
      console.log(result.user)
      setUser(result.user)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className=" text-center">
      {user ? (
        <div>
          <button className="btn" onClick={handleGoogleSignOut}>
            Sign Out with google
          </button>
        </div>
      ) : (
        <div>
          <h1>please login</h1>
          <button className="btn" onClick={handleGoogleSignIn}>
            Sign in with google
          </button>
          <button className="btn" onClick={handleGithubSignIn}>
            Sign in with github
          </button>
        </div>
      )}

      <h1>{user?.displayName}</h1>
      <p>{user?.email}</p>
      <img className=" mx-auto" src={user?.providerData[0].photoURL} alt="" />
    </div>
  );
};

export default Login;
