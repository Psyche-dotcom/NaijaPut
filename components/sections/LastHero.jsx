import Link from "next/link";
import React from "react";

const LastHero = () => {
  return (
    <section
      className=" rounded-3xl w-11/12 md:w-10/12  mx-auto py-16 mb-24 "
      id="patterns"
    >
      <div className="flex justify-center items-center">
        <article className="flex gap-10 flex-col  w-2/3 text-center">
          <h1 className="text-black font-extrabold text-5xl  ">
            {" "}
            Earn your pay with us at Naija put
          </h1>
          <div className="flex gap-5 flex-col font-light font-body_text text-black">
            <p>
              The "Earn Your Pay" investment plan is specifically designed for
              students to own a percentage of inventory in the food company,
              Naija Put. The company has a variety of street food products and a
              network of mobile vendors. The plan is aimed at not just making a
              profit but also sharing the profits with Nigerian youths.
            </p>
          </div>
          <Link href="/login">
            <span
              className="text-white bg-main_projcolor font-body_text font-semibold  rounded-full px-8  py-5  hover:bg-btn_colorh "
              aria-label="Earn your pay"
            >
              Get started
            </span>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default LastHero;
