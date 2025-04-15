import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import ShowDetails2 from './ShowDetails2/ShowDetails2';

const Users = ({users}) => {
    // console.log(users)
    const {name,email,phone,id}=users;
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate('/home')
    }
    const [show,setShow]=useState(false)
    return (
        <div className=' border-2 border-amber-500 rounded-2xl p-4  mt-4 space-y-3'>
            <h1>{name}</h1>
            <p>Email:{email}</p>
            <p><small>Phone:{phone}</small></p>
            <Link to={`/user/${id}`} className='btn'>Details {id}</Link>
            <br />
            <button onClick={()=>setShow(!show)} className='btn'> {show?'Hide':'Show'} details</button>
            <br />
            {
                show&&<ShowDetails2></ShowDetails2>
            }
            
            <button onClick={handleNavigate} className='btn'>Home</button>
        </div>
    );
};

export default Users;