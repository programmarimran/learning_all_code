import React, { use, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../AuthContext/Auth-Context";


const Login = () => {
  const {singInUser}=use(AuthContext)
  const location=useLocation()
  console.log(location)
  const navigate=useNavigate()
  // console.log(singInUser)
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    //sign in 
    singInUser(email,password)
    .then(result=>{
      console.log(result.user)
      navigate(location?.state?location.state:'/')
    })
    .catch(error=>{
      console.log(error)
    })
  };
  const [passShow, setPassShow] = useState(false);
  return (
    <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl mx-auto font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
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
              name="password"
              className="input"
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
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          You have new this website? please{" "}
          <Link to={"/register"} className=" underline text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
