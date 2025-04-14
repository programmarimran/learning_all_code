import React, { useEffect, useState } from "react";
import './display-container.css'
const DisplayCatagory = ({ catagory }) => {
  const [singleCatagory, setSingleCatagory] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catagory?catagory:'Beef'}`)
      .then((res) => res.json())
      .then((data) => setSingleCatagory(data.meals));
  }, [catagory]);
  console.log(singleCatagory);
  return (
    <div>
      <div className="display-container">
      {singleCatagory?.map((object) => (
        <div key={object.strMealThumb} >
          <img src={object.strMealThumb} alt="" />
        </div>
      ))}
      </div>
    </div>
  );
};

export default DisplayCatagory;
