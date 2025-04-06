import React, { useState } from "react";
import Blogs from "./blogs/blogs";

const Compunents = () => {
  const [bookmark, setBookmark] = useState([]);
  const handleBookmark = (blog) => {
    setBookmark([...bookmark, blog]);
  };
  console.log(bookmark);
  return (
    <div>
      <div className="flex text-center">
        <div className="w-[70%]">
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className="w-[30%]">
          <h1> Reading time: 0</h1>
          <h1> Bookmark count: 0</h1>
          {bookmark.map((mark) => (
            <p key={mark.id}>{mark.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compunents;
