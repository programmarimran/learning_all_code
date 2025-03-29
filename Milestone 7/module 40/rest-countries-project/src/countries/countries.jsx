import React from 'react';
import Country from './country/country';
const countrys=fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
const Countries = () => {
    return (
        <div>
           <Country countrys={countrys}></Country>
        </div>
    );
};

export default Countries;