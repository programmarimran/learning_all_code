import React, { use } from 'react';
import { AssetsContext } from './Grandpa';

const Brother = () => {
    const {taka,setTaka}=use(AssetsContext)
    const handleTaka=()=>{
        setTaka(taka+1000)
    }
    return (
        <div>
            <p>Brother</p>
            <small>is Big man</small>
            <button onClick={handleTaka}>Add 1000</button>
        </div>
    );
};

export default Brother;