import React from "react";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmark }) => {
  // console.log(handleBookmark)
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-around items-center">
            <h1>{blog.author}</h1>
            <img className="w-12" src={blog.author_img} alt="" />
            <button
              onClick={() => handleBookmark(blog)}
              className="btn btn-small"
            >
              <FaBookmark size={25} />
            </button>
          </div>
          <h2 className="card-title">{blog.title} </h2>
          <div className="flex justify-around">
            {blog.hashtags.map((has, i) => (
              <p key={i}>{has}</p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Marks as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
