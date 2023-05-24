import React from "react";
import YouTubeEmbed from "../subsection component/YoutubeEmbed";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
const Investment = () => {
  return (
    <section className="w-11/12 md:w-10/12  mx-auto pt-24">
      <div className=" flex justify-between gap-6">
        <div className="w-2/4">
          <YouTubeEmbed />
        </div>
        <div className="w-2/5">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-black text-2xl font-semibold font-body_text">
              We provide you the best investment plan
            </h2>
            <p className="text-black font-light font-body_text leading-6 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
            <Link href="https://www.youtube.com/watch?v=O6affOebZ6Y">
              <span
                className="text-main_projcolor bg-white border-2 border-main_projcolor font-body_text font-semibold  rounded-full px-8  py-5  hover:border-btn_colorh flex gap-2 "
                aria-label="Earn your pay"
              >
                <YouTubeIcon />
                See video
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
