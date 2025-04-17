import React from 'react';
import useInputField from '../../CustomHook/useInputField';

const HookForm = () => {
    const [name,setName]=useInputField('')
    const [email,setEmail]=useInputField('') 
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        console.log("submit- Name:",name,"Email:",email)
    }
    return (
        <div>
            <h1>CUstom Hook</h1>
            <form onSubmit={handleFormSubmit}>
                <input className='input' name='name' type="text" onChange={setName} placeholder='name' />
                <br />
                <input className='input' type="email" name="email" onChange={setEmail} placeholder='email' />
                <br />
                <input className='btn' type="submit" value="Submit" />
            </form>
        </div>
    );
};
export default HookForm;