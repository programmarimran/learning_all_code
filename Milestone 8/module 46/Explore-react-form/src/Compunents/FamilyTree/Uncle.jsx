import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <p>Uncle</p>
            <section className='flex'>
            <Cousin name='nut'></Cousin>
            <Cousin name='boltu'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;