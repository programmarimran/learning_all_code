import React from 'react';
import heroimg from "../../assets/books.jpg";
const Banner = () => {
    return (
        <div className="hero my-4  shadow-md bg-[#13131310] h-[554px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={heroimg} className="max-w-sm w-[250px] md:w-full rounded-lg shadow-2xl" />
          <div className=" space-y-4">
            <h1 className="md:text-5xl text-2xl text-center  md:text-start font-bold w-3/4 md:leading-24">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-primary">View the list</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;