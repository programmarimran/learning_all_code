import React, { useState } from "react";
import Blogs from "./blogs/blogs";

const Compunents = () => {
  const [bookmark, setBookmark] = useState([]);
  const [ctime,setTime]=useState(0)
  const handleBookmark = (blog) => {
    setBookmark([...bookmark, blog]);
  };
  const handleTime = (time,id) => {
    setTime(ctime+time);
    handleRemoveFromBookmark(id)
  };
  const handleRemoveFromBookmark=(id)=>{
    const remainingBlog=bookmark.filter(blog=>blog.id!==id)
    setBookmark(remainingBlog)
  }
  return (
    <div>
      <div className="flex text-center">
        <div className="w-[70%]">
          <Blogs
            handleBookmark={handleBookmark}
            handleTime={handleTime}
          ></Blogs>
        </div>
        <div className="w-[30%]">
          <h1> Reading time: {ctime}</h1>
          <h1> Bookmark count: {bookmark.length}</h1>
          {bookmark.map((mark) => (
            <p className="bg-gray-100 border-2 border m-6 p-5 border-red-500" key={mark.id}>{mark.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compunents;
