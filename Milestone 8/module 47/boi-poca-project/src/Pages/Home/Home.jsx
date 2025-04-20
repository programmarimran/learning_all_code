import React, { createContext, useEffect, useState } from "react";

import Books from "../Books/Books";
import Banner from "../../Conponents/Banner/Banner";
import { useLoaderData } from "react-router";
export const DataContext = createContext();
const Home = () => {
  const datas = useLoaderData();
  const beforeData = datas.data;

  const [book,setBook]=useState('')
  const [data,setData]=useState([])
  const handleForm=(e)=>{
    e.preventDefault()
   
  }
  useEffect(()=>{
    // console.log(book)
    const filteredData=beforeData.filter(remainingData=>remainingData?.bookName.toLowerCase()===book?.toLowerCase())
    setData(filteredData.length>0?filteredData:beforeData)

  },[book])
  // console.log(data)
  
  
  return (
    <>
    <DataContext.Provider value={{data,handleForm,book,setBook}}>
      <Banner></Banner>
      
        <Books></Books>
      </DataContext.Provider>
    </>
  );
};

export default Home;
