import React, { use, useState } from "react";
import { AlignJustifyIcon, X } from "lucide-react";
const CompunentsNav = ({ navData }) => {
  const nav = use(navData);
  const { user, navbar } = nav;
  const [click, setClick] = useState(false);
  const hambarger = () => {
    setClick(!click);
  };
  return (
    <div className="flex justify-between items-center mx-4 p-3">
      <div className="flex">
        <div>
          <span onClick={() => hambarger()}>
            {click ? (
              <X className="md:hidden"></X>
            ) : (
              <AlignJustifyIcon className="md:hidden"></AlignJustifyIcon>
            )}
          </span>
          <ul
            className={`md:hidden bg-amber-100 text-black rounded-2xl absolute p-4 ${
              click ? "top-10" : "-top-28"
            } duration-500  z-1`}
          >
            {navbar.map((navv) => (
              <li className=" cursor-pointer" key={navv.id}>{navv.label}</li>
            ))}
          </ul>
        </div>
        <h1 className="hidden md:block">{user.pageName}</h1>
      </div>
      <ul className="md:flex hidden md:block">
        {navbar.map((navv) => (
          <li key={navv.id} className="mx-3 cursor-pointer">
            {navv.label}
          </li>
        ))}
      </ul>
      <div>
        <img
          className="w-8 h-8 rounded-full border-2 cursor-pointer"
          src={user.profilePicture}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default CompunentsNav;
