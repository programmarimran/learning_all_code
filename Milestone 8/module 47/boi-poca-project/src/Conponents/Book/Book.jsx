import React from "react";
import { NavLink } from "react-router";

const Book = ({ book }) => {
    const {image,bookName,bookId,yearOfPublishing,author,tags

    }=book
  console.log(book);
  return (
    <NavLink to={`/cardDetails/${bookId}`}>
        <div className="card h-full bg-base-100 w-96 shadow-md border border-gray-100 ">
      <figure className="p-4 bg-gray-100 w-2/3 mx-auto m-3">
        <img 
            className=" h-[166px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p>
         {author

         }
        </p>
        <div className="card-actions justify-end">
          {
            tags.map(tag=><button className="badge btn badge-outline">{tag}</button>)
          }
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default Book;
