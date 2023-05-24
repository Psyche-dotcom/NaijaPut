import React from "react";

const UserInfo = ({ title, sub_title }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h4 className=" text-black text-3xl font-bold">{title}</h4>
      <p className="text-black font-body_text font-light">{sub_title}</p>
    </div>
  );
};

export default UserInfo;
