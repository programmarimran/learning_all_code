import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getFromStorage } from "../Utilities/AddtoDB";
import Book from "../Book/Book";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReadList = () => {
  const [listData,setListData]=useState([])
  const datas = useLoaderData().data;
  useEffect(()=>{
   
    //Added a utilities function for the get data form localstorage
    const id = getFromStorage();
    //filtered the localstorages id with current fetch datas id
    const filteredData = datas.filter((data) => id.includes(data.bookId));
    setListData(filteredData)
  },[])
 
  
  //shorted
  const [short,setShort]=useState('')
  const handleShort=(type)=>{
    setShort(type)
    if(type==='Pages')
    {const shortedList=[...listData].sort((a,b)=>a.totalPages-b.totalPages);
    setListData(shortedList)}
    else if(type==='Rating'){
    const shortedList=[...listData].sort((a,b)=>a.rating-b.rating)
    setListData(shortedList)
   }
  }
  console.log(short)
  return (
    <>
    
      <Tabs className="mt-6">
        
        <TabList>
          <Tab>Marks as List</Tab>
          <Tab>Wish List</Tab>
        </TabList>
        <div className="dropdown  justify-center flex-col items-center ml-[50%]">
        <div tabIndex={0} role="button" className="btn m-1">
          Short by: {short&& short}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={()=>handleShort('Pages')}>
            <a>Pages</a>
          </li>
          <li onClick={()=>handleShort('Rating')}>
            <a>Ratings</a>
          </li>
        </ul>
      </div>
        <TabPanel>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4 justify-center">
            {listData.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wish List content</h2>
        </TabPanel>
      </Tabs>
      
    </>
  );
};

export default ReadList;
