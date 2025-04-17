import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = () => {
    return (
        <div>
            <p>Dad</p>
           <section className='flex'>
           <Myself></Myself>
            <Brother></Brother>
            <Sister></Sister>
           </section>
        </div>
    );
};

export default Dad;