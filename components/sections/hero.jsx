import Image from "next/image";
import React from "react";
import HeroArticle from "../subsection component/HeroArticle";
import Carousel from "../subsection component/HeroCarousal";
import heroImg from "../../public/heroImg.png";
const Hero = () => {
  const slides = [
    {
      image: "https://picsum.photos/id/1/800/400",
      title: "First slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://picsum.photos/id/2/800/400",
      title: "Second slide",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "https://picsum.photos/id/3/800/400",
      title: "Third slide",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <section className="bg-transBg">
      <div className="w-11/12 md:w-10/12  mx-auto pt-16 pb-32">
        <div className="lg:flex gap-28 items-center">
          <HeroArticle />
          {/* <Carousel slides={slides} interval={5000} /> */}
          <Image src={heroImg} alt="NaijaPut Logo" className="logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
