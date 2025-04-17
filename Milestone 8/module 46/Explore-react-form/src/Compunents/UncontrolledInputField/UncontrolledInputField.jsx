import React, { useRef } from 'react';

const UncontrolledInputField = () => {
    const nameRef=useRef('')
    const handleForm=(e)=>{
        e.preventDefault()
        console.log(e.target.password.value)
        console.log(nameRef.current.value)
    }
    

    return (
        <div>
            <h1>Uncontrolled Input Field</h1>
            <form onSubmit={handleForm}>
                <input ref={nameRef} className='input' type="text" name='name' placeholder='Name' />
                <br />
                <input  className='input' type="password" name="password" placeholder='Password'/>
                <br />
                <input className='btn' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledInputField;