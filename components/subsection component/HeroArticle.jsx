import Link from "next/link";
import React from "react";

const HeroArticle = () => {
  return (
    <article className="flex gap-10 flex-col w-2/3">
      <h1 className="text-black font-extrabold text-5xl  ">
        {" "}
        Earn your pay with us at Naija put
      </h1>
      <div className="flex gap-5 flex-col font-light font-body_text text-black">
        <p>
          The “Earn your pay” is a special investment plan designed for students
          to own a percentage of inventory in the grand food company, Naija put.{" "}
        </p>
        <p>
          We have solid catalogue of street foods and a distribution network of
          mobile vendors. We don’t just want to make money, We want to share our
          profits with the Nigeria youths.
        </p>
      </div>
      <Link href="/login">
        <span
          className="text-white bg-main_projcolor font-body_text font-semibold  rounded-full px-8  py-5  hover:bg-btn_colorh "
          aria-label="Earn your pay"
        >
          Earn your pay{" "}
        </span>
      </Link>
    </article>
  );
};

export default HeroArticle;
