import React, { useContext } from 'react';
import { AssetsContext } from './Grandpa';

const Special = ({name}) => {
    const give=useContext(AssetsContext)
    console.log(give)
    return (
        <div>
            <p>{name}</p>
            <p>{give.kadol}</p>
        </div>
    );
};

export default Special;