import React from 'react';

const Countnameimg = ({country}) => {
    // console.log(country)
    return (
        <div>
            <div className={` border-4  border-red-500 rounded-2xl flex justify-between flex-col p-6 h-full `}>
            <p className='text-start'>Name: {country.name.common} </p>
      
           <img className='w-[50%]' src={country.flags.png} alt="" />
         
      
            </div>
        </div>
    );
};

export default Countnameimg;