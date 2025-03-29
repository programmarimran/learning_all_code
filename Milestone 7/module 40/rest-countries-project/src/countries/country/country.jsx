import React, { use, useState } from 'react';
import Singlecountry from './singleCountry/singlecountry';

const Country = ({countrys}) => {
    const country=use(countrys)
    const [visitedCountry,setVisitedCountry]=useState([])
    const handlevisitedCountry=()=>{
        console.log("set hoise visitedcountry")
    }
    
    return (
        <div >
            <h1 className='m-8'>Visited Country: {}</h1>

            <div className='grid grid-cols-3 gap-4'>
            {
                country.map(singleCountry=><Singlecountry key={singleCountry.flags.png} singleCountry={singleCountry}></Singlecountry>)
            }
            </div>
            
            
        </div>
    );
};

export default Country;