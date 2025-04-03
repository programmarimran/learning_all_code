import React from 'react';
import './bottle.css'
import { addToCardLocalStorage } from '../../utilities/localstorage';

const Bottle = ({bottle,handleCount}) => {
 
    const {price,category,img,name,id}=bottle
    return (
        <div className='card'>
            <p>{category}</p>
            <h4>{name}</h4>
            <p>{price}</p>
            <img src={img} alt="" />
            <br />
            <button onClick={()=>{
                handleCount(bottle)
                addToCardLocalStorage(id)
                }}>Buy</button>
        </div>
    );
};

export default Bottle;

