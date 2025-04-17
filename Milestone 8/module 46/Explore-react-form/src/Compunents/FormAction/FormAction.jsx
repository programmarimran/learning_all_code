import React from 'react';

const FormAction = () => {
    const handleFormAction=(formData)=>{
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }
    return (
        <div>
            <h1>Form Action</h1>
            <form action={handleFormAction}>
                <input className='input' type="text" name='name' placeholder='Name' />
                <br />
                <input className='input' type="email" name='email' placeholder='Email' />
                <br />
                <input className='btn' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;