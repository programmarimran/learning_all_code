import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Details = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div>
           <p>{data.name}</p>
           <p>{data.email}</p>
           <Link className=' btn' to={"/"}>back to home</Link>
        </div>
    );
};

export default Details;