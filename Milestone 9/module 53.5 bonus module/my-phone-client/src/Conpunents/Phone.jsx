import React from "react";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>{data.name}</h1>
      {/* <img src={data.image} alt="" /> */}
    </div>
  );
};

export default Phone;
