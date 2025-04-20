// import React, { useEffect, useState } from "react";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Home/Home";
import Book from "../../Conponents/Book/Book";

const Books = () => {
 const data=useContext(DataContext)
 const [showAll,setShowAll]=useState(false)
 const handleShowAll =()=>{
  setShowAll(!showAll)
 }
 //consver ted data cause slice in the show all not show less
 const [bookItem, setBookItem]=useState([])
 useEffect(()=>{
  showAll?setBookItem(data):setBookItem(data.slice(0,4))
  !showAll&&window.scrollTo(0,650)
 },[data,showAll])
//  console.log(data.slice(0,4),showAll)
  return(
    <>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
            bookItem.map(book=><Book book={book} key={book.bookId}></Book>)
        }
    </div>
    <button onClick={handleShowAll} className="btn btn-primary ml-[50%] my-4">{showAll?'Show Less':'Show All'}</button>
    </>
  )
};

export default Books;
