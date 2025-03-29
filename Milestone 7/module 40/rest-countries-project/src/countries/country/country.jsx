import React, { use } from 'react';
import Singlecountry from './singleCountry/singlecountry';

const Country = ({countrys}) => {
    const country=use(countrys)
    
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                country.map(singleCountry=><Singlecountry key={singleCountry.flags.png} singleCountry={singleCountry}></Singlecountry>)
            }
            
        </div>
    );
};

export default Country;