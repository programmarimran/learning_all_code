import React, { use } from 'react';

const User2 = ({user2}) => {
    const userData2= use(user2)
    console.log(userData2)

    return (
        <div>
            <h1>This is users2</h1>
        </div>
    );
};

export default User2;