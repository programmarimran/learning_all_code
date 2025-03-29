import React from 'react';

const Singlecountry = ({singleCountry}) => {
   
    const handleClick=()=>{
        console.log("click hoise")
    }
    return (
        <div className="border border-4  border-red-500 rounded-2xl flex flex-col justify-between gap-3 p-6">
            <h1 className='text-center text-base font-normal'>Name:{singleCountry.name.common} </h1>
      
           <img src={singleCountry.flags.png} alt="" />
      
           <button onClick={handleClick}> not click</button>
      
           
        </div>
    );
};

export default Singlecountry;