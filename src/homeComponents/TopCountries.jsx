// import Image from "next/image";
import React from "react";

import austriallia from "../../public/images/top-countries/austraillia.jpg";
import dubai from "../../public/images/top-countries/dubai.jpg";
import england from "../../public/images/top-countries/england.jpg";
import newZealand from "../../public/images/top-countries/new-zealand.jpg";
import southAsia from "../../public/images/top-countries/south-asia.jpg";

const TopCountries = () => {
  
  const topCountryImages = [
    {
      id: 0,
      img: austriallia,
      name: "AUSTRALIA",
    },
    {
      id: 1,
      img: dubai,
      name: "DUBAI",
    },
    {
      id: 2,
      img: england,
      name: "ENGLAND",
    },
    {
      id: 3,
      img: newZealand,
      name: "IRELAND",
    },
    {
      id: 4,
      img: southAsia,
      name: "SOUTH ASIA",
    },
  ];

  // Separate the images into two arrays: topRowImages and bottomRowImages
  const topRowImages = topCountryImages.slice(0, 2);
  const bottomRowImages = topCountryImages.slice(2);

  return (
    <div className="mb-20 mt-24">
      <div className="tracking-[4px] text-[#b5b6b8] text-sm lg:text-lg text-center" >TOP COUNTRIES</div>
      <div className="tracking-[1px] text-[#4d4e50] lg:text-3xl text-2xl text-center my-6 font-medium">
        THESE DESTINATIONS ARE FAVORITES AMONG OUR CLIENTS
      </div>
      <div className="lg:grid grid-cols-2 relative">
        {/* Map over the topRowImages array */}
        {topRowImages.map((item) => (
          <div key={item.id} className="top-countries-image cursor-pointer">
            <img src={item.img} alt={item.item} className="h-full" />
            <div className="image-overlay"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 country-name">
              <h2 className="lg:text-3xl text-xl text-white">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:grid grid-cols-3">
        {bottomRowImages.map((item) => (
          <div key={item.id} className="top-countries-image cursor-pointer">
          <img src={item.img} alt={item.item} className="h-full" />
            <div className="image-overlay"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 country-name">
              <h2 className="lg:text-3xl text-xl text-white">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCountries;
