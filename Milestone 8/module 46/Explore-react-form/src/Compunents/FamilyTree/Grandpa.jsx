import React, { createContext, useState } from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Unt from './Unt';

export const AssetsContext=createContext(1)
const Grandpa = () => {
    const assets='Banana'
    const kadol='Jackfruit'
    const [taka,setTaka]=useState(0)
    return (
        <div>
            <p>GrandPa</p>
            <h1>total Taka:{taka}</h1>
           <AssetsContext.Provider value={{assets,kadol,taka,setTaka}}>
           <section className='flex justify-center gap-2'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Unt></Unt>
            </section>
           </AssetsContext.Provider>
        </div>
    );
};

export default Grandpa;