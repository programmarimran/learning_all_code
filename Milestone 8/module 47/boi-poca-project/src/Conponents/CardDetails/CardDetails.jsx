import React from "react";
import { useLoaderData, useParams } from "react-router";
import {   setToStorage } from "../Utilities/AddtoDB";

const CardDetails = () => {
  const { id } = useParams();
  const datas = useLoaderData().data;
  const singleData = datas.find((data) => data.bookId === parseInt(id));
  // console.log(singleData)
  const { image, bookName, publisher, category, tags, bookId } = singleData;
  
  const handleRead = (id) => {
    setToStorage(id);
  };
  // const handleAlert=(id)=>{
  //   const storageList=getFromStorage();

  //   console.log(storageList)
  //   toast("Wow so easy!")
  //   return
  // }
  return (
    <div className="card lg:card-side bg-white shadow-md rounded-2xl m-6">
      <figure className=" flex-1 bg-gray-100 ">
        <img className="p-24" src={image} alt="Album" />
      </figure>
      <div className="flex flex-col items-start justify-center space-y-6 flex-1">
        <h2 className="card-title">{bookName}!</h2>
        <p>{publisher}</p>
        <p>{category}</p>
        <p>
          Review: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus maxime nihil nostrum expedita. Dolorem iusto obcaecati vero
          ipsa deserunt fugiat?
        </p>
        <div className=" flex gap-4">
          {tags.map((tag, index) => (
            <button key={index} className="">
              {tag}
            </button>
          ))}
        </div>
        
        <div className="flex gap-6">
        
          <button
            onClick={() =>{
              handleRead(bookId)
          
              
            }}
            className="btn btn-primary"
          >
            Marks as Read
          </button>
          <button className="btn btn-primary ">Add to wishlist</button>
        </div>
      </div>
      
    </div>
  );
};

export default CardDetails;
