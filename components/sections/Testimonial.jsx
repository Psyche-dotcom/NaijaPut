import { testimonialData } from "@/dummyData/data";

import React from "react";
import Cardtest from "../common/Card";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Testimonial = () => {
  return (
    <section className="w-11/12 md:w-10/12  mx-auto py-24" id="testimonial">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-black text-2xl font-semibold font-body_text">
          Testimonial
        </h2>
        <p className="text-black font-body_text">What our users are saying</p>
      </div>
      <div className="relative">
        <div className="flex justify-between mt-9">
          {testimonialData.map(({ name, id, test, imgSource }) => {
            return (
              <Cardtest
                key={id}
                imgSrc={imgSource}
                name={name}
                testimonial={test}
              />
            );
          })}
        </div>
        <span
          className="text-white absolute bg-main_projcolor font-body_text font-semibold  rounded-full h-12 w-12 flex justify-center items-center hover:bg-btn_colorh "
          aria-label="next-testimonial"
          style={{
            right: "-20px",
            top: "40%",
          }}
        >
          <ArrowForwardIosIcon />
        </span>
      </div>
    </section>
  );
};

export default Testimonial;
