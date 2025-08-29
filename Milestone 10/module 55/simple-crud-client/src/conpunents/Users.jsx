import React, { useState } from 'react';
import { Link } from 'react-router';

const Users = ({userdata}) => {
    console.log(userdata)
    const [user,setUser]=useState(userdata)

    const handleAddUser=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const newUser={name,email}
        console.log(newUser)

        fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("server site db",data)
            if(data.insertedId){

                alert("User database added successfully")
                e.target.reset()
                newUser._id=data.insertedId
                const newStateUser=[...user,newUser]
                setUser(newStateUser)
            }
        })
    }
    const handleDeleteUser=(id)=>{
        // console.log(id)
        fetch(`http://localhost:3000/users/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("deleted data form the server databasae",data)
            if(data.deletedCount){
                const remainingUser=user.filter(singleUser=>singleUser._id!==id)
                setUser(remainingUser)
            }
        })

    }
    return (
       <div>
        <div className=' flex justify-center items-center space-y-3 my-7'>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' className='input' placeholder='name' />
                <br />
                <input type="email" name="email" className=" input"  placeholder='email'/>
                <br />
                <input type="submit" value="Submit" className='input' />

            </form>
        </div>
        <div className=' flex justify-center items-center space-y-3 my-7'>
           <div>
            <p className=' text-2xl text-center font-bold'>total Users: {user.length}</p>
             {
                user.map(singleUser=><p key={singleUser._id}>
                    {singleUser.name}:{singleUser.email}
                    <Link className=' btn' to={`/details/${singleUser._id}`}>Details</Link>
                    <Link className=' btn' to={`/update/${singleUser._id}`}>Edit</Link>
                    <span onClick={()=>handleDeleteUser(singleUser._id)} className=' btn'>x</span>
                </p>)
            }
           </div>
        </div>
       </div>
    );
};

export default Users;