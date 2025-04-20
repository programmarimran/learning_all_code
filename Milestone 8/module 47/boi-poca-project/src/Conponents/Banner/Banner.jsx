import React, { useContext } from 'react';
import heroimg from "../../assets/books.jpg";
import { DataContext } from '../../Pages/Home/Home';
const Banner = () => {
const {handleForm,book,setBook}=useContext(DataContext)

 
    return (
        <div className=" flex flex-col items-center justify-center my-4  shadow-md bg-[#13131310] h-[554px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={heroimg} className="max-w-sm w-[250px] md:w-full rounded-lg shadow-2xl" />
          <div className=" space-y-4 text-center md:text-start">
            <h1 className="md:text-5xl text-2xl text-center  md:text-start font-bold  md:leading-24">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-primary">View the list</button>
          </div>
          
        </div>
        <form onSubmit={handleForm} className=' flex '>
          <input onChange={(e)=>{setBook(e.target.value)}} defaultValue={book} className='input md:w-3xl  border-none rounded-2xl shadow-md placeholder:text-xl placeholder:ml-6' type="text" placeholder='Text here' name='name' />
          <input className='btn  md:w-24 bg-gray-500 text-white text-md hover:bg-green-500 rounded-xl shadow-md' type="submit" value={'Search'} />
        </form>
      </div>
    );
};

export default Banner;