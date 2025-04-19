// import React, { useEffect, useState } from "react";
import React, { useContext } from "react";
import { DataContext } from "../Home/Home";
import Book from "../../Conponents/Book/Book";

const Books = () => {
 const data=useContext(DataContext)
  return(
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
            data.map(book=><Book book={book} key={book.bookId}></Book>)
        }
    </div>
  )
};

export default Books;
