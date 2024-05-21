"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import dubai from "../../public/images/carousel-images/dubai-img.jpg";
import austraillia from "../../public/images/carousel-images/austraillia-img.jpg";
import germany from "../../public/images/carousel-images/germany-img.jpg";
import maldives from "../../public/images/carousel-images/maldives-img.webp";
import usa from "../../public/images/carousel-images/usa-img.jpg";
import thailand from "../../public/images/carousel-images/thailand-img.jpg";
// import Image from "next/image";

import logo from "../../public/images/rising-star-logo.png";

const CarouselSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1023 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1022, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const placesTabs = [
    {
      id: 0,
      item: "All",
    },
    {
      id: 1,
      item: "GULF",
    },
    {
      id: 2,
      item: "SHENGEN",
    },
    {
      id: 0,
      item: "ASIA",
    },
    {
      id: 0,
      item: "EUROPE",
    },
    {
      id: 0,
      item: "USA",
    },
  ];

  const carouselImgs = [
    {
      id: 0,
      item: dubai,
      text: "Dubai",
      message: "A World of endless Possibilities",
    },
    {
      id: 1,
      item: austraillia,
      text: "Australia",
      message: "Discover the Land Down Under",
    },
    {
      id: 2,
      item: germany,
      text: "Germany",
      message: "Where Tradition Meets Innovation",
    },
    {
      id: 3,
      item: thailand,
      text: "Thailand",
      message: "Land of Smiles and Serenity",
    },
    {
      id: 4,
      item: usa,
      text: "USA",
      message: "Explore the American Dream",
    },
    {
      id: 5,
      item: maldives,
      text: "Maldives",
      message: "Escape to Paradise",
    },
  ];

  return (
    <div className=" mt-24 flex flex-col justify-center items-center">
      <div className="text-center">
        <span className="tracking-[4px] text-[#b5b6b8] text-sm lg:text-lg">
          TRIP INSPIRATION
        </span>
      </div>
      <div className="tracking-[1px] text-[#4d4e50] lg:text-3xl text-2xl text-center mt-4 font-medium">
        FIND THE PERFECT PLACE TO GO ACTIVITIES , <br></br> HOTELS , AND MORE
      </div>
      <div>
        <div className="grid grid-cols-2 lg:flex  gap-3 mt-8">
          {placesTabs.map((item, index) => (
            <div className="text-[#57c0e4] border-[3px] border-[#57c0e4] rounded-[5px] w-36 h-10 text-center px-2 text-base flex justify-center items-center font-semibold custom-font-family cursor-pointer hover:text-white hover:bg-[#57c0e4] hover:border-white transition-all ease-in duration-200">
              <div>{item.item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-20">
        <Carousel responsive={responsive} infinite={true}>
          {carouselImgs.map((item, index) => (
            <div className="mx-2 carousel-image" key={index}>
              <div className="relative">
                <img
                  src={item.item}
                  alt={item.text}
                  className="w-96 h-72 object-cover rounded-[4px]"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="custom-font-family">
                <span className="absolute font-medium lg:bottom-[70px] bottom-[70px] left-[12px] lg:text-lg text-2xl text-white">
                  {item.text}
                </span>
                <span className="message absolute font-medium lg:bottom-[40px] bottom-[40px] left-[12px] text-[14px] text-white opacity-0 transition-opacity duration-300">
                  {item.message}
                </span>
                {/* <span className="message opacity-0 transition-opacity duration-300 absolute top-[10px] left-[12px] text-[16px] text-white font-bold">R</span> */}
                <div className="message w-9 opacity-0 transition-opacity duration-300 absolute top-[15px] left-[12px]">
                  <img src={logo} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSection;
