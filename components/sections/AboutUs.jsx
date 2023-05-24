import Image from "next/image";
import React from "react";
import women from "../../public/women.png";
const AboutUs = () => {
  return (
    <section className="flex" id="about">
      <div className="bg-main_projcolor w-1/2">
        <div className="py-20 px-24">
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-2xl font-semibold font-body_text">
              About Naija put
            </h2>
            <p className="text-white font-light font-body_text leading-6 text-base">
              The Centre For Kick Against Penury aims to build a platform that
              brings together the wealthy and idealists to work towards
              alleviating poverty. They plan to create an independent finance
              system that prioritizes the welfare of the people and helps uplift
              them from poverty. Strategies they could use include creating a
              crowdfunding platform, facilitating mentorship and training
              programs, promoting investment in poverty reduction initiatives,
              and advocating for policy changes that create a more equitable
              society.
            </p>
          </div>
        </div>
      </div>

      <Image src={women} alt="women chaking hand" />
    </section>
  );
};

export default AboutUs;
