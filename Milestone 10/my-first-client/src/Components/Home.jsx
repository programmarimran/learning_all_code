import React, { useState } from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const initialdata = useLoaderData();
  console.log(initialdata);
  const [data,setData]=useState(initialdata)
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:3000/users",{
      method:"post",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(dataBackand=>{
      console.log("new user from data",dataBackand);
      const newData=[...data,dataBackand]
      setData(newData)
      e.target.reset()
    })
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <button type="submit">submit</button>
      </form>
      {data.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
