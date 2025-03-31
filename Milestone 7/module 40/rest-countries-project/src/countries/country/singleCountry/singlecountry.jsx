import React, { useState } from 'react';

const Singlecountry = ({singleCountry,handleVisitedCountry}) => {
   const [visited,setVisited]=useState(false)


    const handleClick=()=>{
        // setVisited(true)
        // if(visited===true){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        setVisited(!visited)

    handleVisitedCountry(singleCountry)


   
        
        
       
    }
    return (
        <div className={` border-4  border-red-500 rounded-2xl flex flex-col justify-between gap-3 p-6 ${visited&&"bg-yellow-50"}`}>
            <h1 className={`text-center text-base font-normal ${visited &&"text-black"}`}>Name: {singleCountry.name.common} </h1>
      
           <img src={singleCountry.flags.png} alt="" />
      
         
           <button onClick={handleClick}> 
            {visited?"visited":"not visited"}
          
           </button>
        
          
      
           
        </div>
    );
};

export default Singlecountry;