import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Update = () => {
    const user=useLoaderData()
    const handleUserUpdate=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const currentUser={name,email}
        console.log(currentUser)

        //Update from database server site
        fetch(`http://localhost:3000/users/${user._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("server updated and then ",data)
        })

    }
    return (
        <div>
            <form onSubmit={handleUserUpdate}>
                <input className=' input' type="text" name='name' defaultValue={user.name} />
                <br />
                <input className=' input' type="email" name='email' defaultValue={user.email} />
                <br />
                <input className=' input' type="submit" value="Update user" />

            </form>

            <Link className=' btn' to={"/"}>  Back to home</Link>
        </div>
    );
};

export default Update;