import React, { useState } from 'react';



const About = () => {
    const [data,setData]=useState(0)
    const handleData=()=>{
        setData(data+10)
    }
    // console.log(data)
    return (
        <div onClick={handleData} className='text-3xl'>
            This is About:------------------{data}
        </div>
    );
};

export default About;