import React from 'react';
import './selectedBottle.css'

const SelectedBottle = ({selectedBottle,handleRemove}) => {
    // console.log(handleRemove)
    const {img,id}=selectedBottle
    return (
        <div className="selected-card-container">
           <div className='selected-card'>
           <img src={img} alt="" />
           <button onClick={()=>{handleRemove(id)}}>x</button>
           </div>
            
        </div>
    );
};

export default SelectedBottle;