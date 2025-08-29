import React, { useRef, useState } from "react";
import { NavLink } from "react-router";
import { LuEyeClosed } from "react-icons/lu";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
const Login = () => {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    //firebase start
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          alert("Please check your email and click the verify");
          return;
        } else {
          setSuccessMessage("Your Login Successfully done");
        }
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
        setSuccessMessage("");
      });
  };
  const emailRef=useRef()
  const handleResetPassword=()=>{
    console.log("reset Password",emailRef.current.value)
    const email=emailRef.current.value;
    //reset Password
    sendPasswordResetEmail(auth,email)
    .then(()=>{
      alert("Please check your email")
    })
    .catch(error=>{
      setErrorMessage(error.message)
    })
  }
  return (
    <>
      <form
        onSubmit={handleSignIn}
        className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend mx-auto text-2xl">
          Please Login
        </legend>
        <label className="label">Email</label>
        <input 
        ref={emailRef}
          type="email"
          className="input"
          name="email"
          placeholder="Email"
        />
        <label className="label">Password</label>
        <div className=" relative">
          <input
            type={show ? "text" : "password"}
            name="password"
            className="input"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className=" absolute right-4 top-[25%]"
          >
            <LuEyeClosed size={20}></LuEyeClosed>
          </button>
        </div>
        <div onClick={handleResetPassword}>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button className="btn btn-neutral mt-4">Login</button>
      </form>
      {errorMessage && <p className=" text-red-500">{errorMessage}</p>}
      {successMessage && <p className=" text-green-600">{successMessage}</p>}
      <p>
        New to this Website? please{" "}
        <NavLink to={"/signup"} className={" text-blue-500 underline"}>
          signUp
        </NavLink>
      </p>
    </>
  );
};

export default Login;
