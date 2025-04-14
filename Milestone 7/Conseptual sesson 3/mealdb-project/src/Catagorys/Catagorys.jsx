import React, { useState } from 'react';
import {useEffect} from 'react'
import './Catagorys.css'
const Catagorys = ({setCatagory}) => {
    const [catagorys,setCatagorys]=useState([])
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res=>res.json())
        .then(data=>setCatagorys(data.categories))
    },[])
    
    
    return (
        <div className='catagory-container'>
            {
                catagorys.map(catagory=><h1 onClick={()=>setCatagory(catagory.strCategory)} key={catagory.idCategory} className='catagory'>{catagory.strCategory}</h1>)
            }
        </div>
    );
};

export default Catagorys;

// all catagorys   https://www.themealdb.com/api/json/v1/1/categories.php
// filterby catagory  https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
