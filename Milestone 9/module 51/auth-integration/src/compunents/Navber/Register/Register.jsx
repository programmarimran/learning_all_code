import {updateProfile,  } from "firebase/auth";
import React, { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router";
import { AuthContext } from "../../../AuthContext/Auth-Context";
import { auth } from "../../../Firebase/Firebase.init";

const Register = () => {
  const { createUser }=useContext(AuthContext)

  // console.log(createUser)
    const handleRegister=(e)=>{
        e.preventDefault()
        const name =e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(name,email,password)
        //context api with  firebase
      createUser(email,password)
      .then(result=>{
        console.log(result.user)
        //update profile
            const profile={displayName:name}
            updateProfile(auth.currentUser,profile)
            .then(()=>{
                console.log("name added successfully")
            })
            .catch(error=>{
                console.log(error)
            })
      })
      .catch(error=>{
        console.log(error)
      })
      

    }
  const [passShow, setPassShow] = useState(false);
  return (
    <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl mx-auto font-bold">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <div className=" relative">
            <input
              type={passShow ? "text" : "password"}
              className="input" 
              name="password"
              placeholder="Password"
            />
            <button
              onClick={() => setPassShow(!passShow)}
              className=" absolute top-[25%] right-6"
                type="button"
            >
              {passShow ? (
                <IoEyeOffOutline size={25}></IoEyeOffOutline>
              ) : (
                <IoEyeOutline size={25}></IoEyeOutline>
              )}
            </button>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>
          You have already register? please{" "}
          <Link to={"/login"} className=" underline text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
