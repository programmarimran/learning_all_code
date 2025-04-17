import React, { useState } from 'react';

const ControlldFormField = () => {
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const handleField=(e)=>{
        e.preventDefault()
        console.log(e.target.name.value)
    }
    const handleChange=(e)=>{
        setPassword(e.target.value)
        if(password.length<6){
            setError("please password 6 character")
        }
        else{
            setError("")
        }
    }
    // const [formData,setFormData]=useState({  //I don't understand the topic 
    //     name:,
    //     password:,
    //     Home:
    // })
    return (
        <div>
            <h1>Controlled Form Field</h1>
            <form onSubmit={handleField}>
                <input className='input' type="text" name='name' placeholder='Your name' />
                <br /> 
                <input className='input' type="email" name='email' placeholder='Your Email' />
                <br /> 
                <input onChange={handleChange} defaultValue={password}  className='input' type="password" name='pass' placeholder='Your Password' />
                <br /> 
                
                <input className='btn' type="submit" value="Submit" />
            </form>
            <p className='text-red-500'>{error}</p>
            
        </div>
    );
};

export default ControlldFormField;