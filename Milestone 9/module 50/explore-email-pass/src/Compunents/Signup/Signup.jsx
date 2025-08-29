import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase/Firebase.init";
import { LuEyeClosed } from "react-icons/lu";
import { NavLink } from "react-router";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [success, setsuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    // console.log(terms)
    //Regular Expresson
    const passRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (passRegEx.test(password) === false) {
      setErrorMessage(
        "you have must password one Upcarse, one lowarCase and one number and minimum 8 character"
      );
      return;
    } else if (!terms) {
      setErrorMessage("Please accept terms and conditions");
      return;
    }
    // firebase start
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        // send email varification
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert("please checkyour email and click the verification");
            setsuccess(true);
          })
          .catch((error) => {
            console.log(error.message);
          });
        // updated user profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            alert("Profile Updated successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
        setsuccess("");
      });
    setErrorMessage("");
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full pb-4 max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Please sign up</h1>
          <form onSubmit={handleSignup} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input box-content"
              placeholder="name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input box-content"
              placeholder="photo"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input box-content"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <div className=" relative ">
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input box-content"
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
            <label className="label">
              <input type="checkbox" name="terms" className="checkbox" />
              Terms and condition
            </label>

            <button className="btn box-content btn-neutral mt-4">
              Sign Up
            </button>
          </form>
        </div>
        <p className=" text-red-500">{errorMessage && errorMessage}</p>
        <p className=" text-green-500">
          {success && "Your Sign up successfully done"}
        </p>
        <p>
          Already sign up? please{" "}
          <NavLink to={"/login"} className=" text-blue-500 underline">
            sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
