import React from 'react';
import './bottle.css'

const Bottle = ({bottle,handleCount}) => {
 
    const {price,category,img,name}=bottle
    return (
        <div className='card'>
            <p>{category}</p>
            <h4>{name}</h4>
            <p>{price}</p>
            <img src={img} alt="" />
            <br />
            <button onClick={()=>{handleCount()}}>Buy</button>
        </div>
    );
};

export default Bottle;

