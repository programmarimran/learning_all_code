import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      All phones: {data.length}
     {
        data.map(phone=> <ul key={phone.id}>
        <li><Link to={`/phones/${phone.id}`}>{phone.name}</Link></li>
      </ul>)
     }
    </div>
  );
};

export default Phones;
