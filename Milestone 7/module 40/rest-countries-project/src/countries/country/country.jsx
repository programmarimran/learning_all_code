import React, { use,useState } from 'react';
import Singlecountry from './singleCountry/singlecountry';

const Country = ({countrys}) => {
    const country=use(countrys)
    const [visitedCountry,setVisitedCountry]=useState([])
    const handleVisitedCountry=(singleCountry)=>{
        const newArry=[...visitedCountry,singleCountry]
       setVisitedCountry(newArry)
    }
    

    
    return (
        <div >
            <h1>Total Country: {country.length}</h1>
            <h1 className='m-8'>Visited Country: {visitedCountry.length}</h1>
            <ol>
           {
            visitedCountry.map(count => <li>{count.name.common}</li>)
           }
            </ol>

            <div className='grid grid-cols-3 gap-4'>
            {
                country.map(singleCountry=><Singlecountry handleVisitedCountry={handleVisitedCountry} key={singleCountry.flags.png} singleCountry={singleCountry}></Singlecountry>)
            }
            </div>
            
            
        </div>
    );
};

export default Country;