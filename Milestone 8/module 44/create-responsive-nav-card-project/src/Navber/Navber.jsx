
import React, { Suspense } from "react";
import CompunentsNav from "./CompunentsNav/CompunentsNav";

const navData=fetch("Navber.json")
.then(res=>res.json())
const Navber = () => {
  return (
    <div >
        <Suspense>
            <CompunentsNav navData={navData}></CompunentsNav>
        </Suspense>
    </div>
  );
};

export default Navber;
