import React from "react";

const StepsComp = ({ Icon, title, sub_title }) => {
  return (
    <div
      className="bg-white flex flex-col gap-4 py-8 border-2 border-solid border-gray-100 px-8 rounded-3xl"
      style={{
        maxWidth: "400px",
      }}
    >
      <Icon className="text-main_projcolor" />
      <div
        className="flex flex-col gap-2
      "
      >
        <h4 className="font-semibold text-black"> {title}</h4>
        <p className="text-light_col">{sub_title}</p>
      </div>
    </div>
  );
};

export default StepsComp;
