import React from "react";
import UserInfo from "../common/UserInfo";

const User = () => {
  return (
    <section className="w-11/12 md:w-10/12  mx-auto pt-14">
      <div className="flex items-center justify-center">
        <div
          className="flex items-center flex-col gap-8 bg-white py-8 px-8 rounded-3xl relative border-2 border-solid border-gray-100"
          style={{ top: "-110px", minWidth: "750px" }}
        >
          <p className="text-2xl">Our users</p>
          <div className=" flex gap-8 items-center justify-between">
            <UserInfo title="323+" sub_title="Total account created" />
            <UserInfo title="100+" sub_title="Total transaction" />
            <UserInfo title="900+" sub_title="Successful investment" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
