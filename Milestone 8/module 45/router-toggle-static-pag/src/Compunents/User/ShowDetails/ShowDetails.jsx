import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const ShowDetails = () => {
    const user=useLoaderData()
    const {username,website,name}=user;
    const navigate=useNavigate()
    return (
       <div >
         <div className='border-2 border-red-500 rounded-2xl p-5 m-5'>
            <h3>{name}</h3>
            <h1>{username}</h1>
            <p>website:{website}</p>
            <button className='btn' onClick={()=>navigate(-1)}>Back</button>
        </div>
       </div>
    );
};

export default ShowDetails;