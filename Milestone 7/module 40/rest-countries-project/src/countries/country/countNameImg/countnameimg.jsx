import React from 'react';

const Countnameimg = ({country}) => {
    // console.log(country)
    return (
        <div>
            <div className={` border-4  border-red-500 rounded-2xl flex justify-between flex-col p-6 h-full `}>
            <h1>Name: {country.name.common} </h1>
      
           <img src={country.flags.png} alt="" />
         
      
            </div>
        </div>
    );
};

export default Countnameimg;