import Image from "next/image";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Cardtest = ({ imgSrc, name, testimonial }) => {
  return (
    <div
      className="flex flex-col gap-4 rounded-3xl border-2 border-solid border-gray-100 px-6 py-6"
      style={{ width: "250px" }}
    >
      <div className="flex gap-3 items-center">
        <Image src={imgSrc} alt={name} />
        <div className=" flex flex-col gap-1">
          <h4 className="font-semibold font-body_text text-black"> {name} </h4>
          <div className="flex gap-1 text-star_col">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
      <p className="text-light_col">"{testimonial}"</p>
    </div>
  );
};

export default Cardtest;
