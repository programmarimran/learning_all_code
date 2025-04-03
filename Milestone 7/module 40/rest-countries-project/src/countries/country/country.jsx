import React, { use,useState } from 'react';
import Singlecountry from './singleCountry/singlecountry';
import Countnameimg from './countNameImg/countnameimg';

const Country = ({countrys}) => {
    const country=use(countrys)

    const [visitedCountry,setVisitedCountry]=useState([])
    const handleVisitedCountry=(singleCountry)=>{
        const newArry=[...visitedCountry,singleCountry]
       setVisitedCountry(newArry)
    }

// console.log(visitedCountry)
    return (
        <div >
            <h1>Total Country: {country.length}</h1>
            <h1 className='m-8'>Visited Country: {visitedCountry.length}</h1>

         
           <div className='grid grid-cols-2 md:grid-cols-4 gap-4 border border-4 border-amber-500 p-1 m-1 rounded-xl md:p-8 md:m-8'>
            {
                visitedCountry.map(country=>
                <Countnameimg 
                key={country?.flags?.png} 
                country={country}>
                </Countnameimg>)
            }
            </div>
         

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                country.map(singleCountry=>
                <Singlecountry
                 handleVisitedCountry={handleVisitedCountry} 
                 key={singleCountry.flags.png} 
                 singleCountry={singleCountry}>
                    
                </Singlecountry>)
            }
            </div>
        
            
            
        </div>
    );
};

export default Country;