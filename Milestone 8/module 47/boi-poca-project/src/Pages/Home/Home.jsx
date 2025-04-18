import React, { createContext } from "react";

import Books from "../Books/Books";
import Banner from "../../Conponents/Banner/Banner";
import { useLoaderData } from "react-router";
export const DataContext = createContext();
const Home = () => {
  const datas = useLoaderData();
  const data = datas.data;
  return (
    <>
      <Banner></Banner>
      <DataContext.Provider value={data}>
        <Books></Books>
      </DataContext.Provider>
    </>
  );
};

export default Home;
