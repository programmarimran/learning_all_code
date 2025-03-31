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

    return (
        <div >
            <h1>Total Country: {country.length}</h1>
            <h1 className='m-8'>Visited Country: {visitedCountry.length}</h1>

         
           <div className='grid grid-cols-3 gap-4 border border-4 border-amber-500 p-8 m-8'>
            {
                visitedCountry.map(country=><Countnameimg key={country.flags.png} country={country}></Countnameimg>)
            }
            </div>
           

            <div className='grid grid-cols-3 gap-4'>
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