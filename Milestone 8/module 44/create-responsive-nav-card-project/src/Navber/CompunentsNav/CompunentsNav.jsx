import React, { use } from "react";
import { AlignJustifyIcon } from "lucide-react";
const CompunentsNav = ({navData}) => {
    const nav=use(navData)
    const {user,navbar}=nav
    console.log(user.profilePicture)
  return (
    <div className="flex justify-between items-center mx-4 p-3">
      <div className="flex">
        <AlignJustifyIcon></AlignJustifyIcon>
        <h1>{user.pageName}</h1>
      </div>
      <div className="flex">
        {
            navbar.map(navv=><h4 key={navv.id} className="mx-3">{navv.label}</h4>)
        }
      </div>
      <div>
      <img className="w-8 h-8 rounded-full border-2" src={user.profilePicture} alt="Profile" />
      </div>
    </div>
  );
};

export default CompunentsNav;
