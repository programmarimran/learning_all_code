import React, { use } from 'react';

const ShowDetails2 = ({userSecond}) => {
const users=use(userSecond)
const user=users.data.address
const {street,city}=user
    return (
        <div className=' border-2 border-red-500 rounded-2xl p-4 mx-10'>
            <h1>street: {street}</h1>
            <p>{city}</p>
        </div>
    );
};

export default ShowDetails2;