import React from "react";

import austriliaFlag from "../public/images/visa-flags/australia-flag.jpg";
import azerbaijanFlag from "../public/images/visa-flags/azerbaijan-flag.jpg";
import bahrainFlag from "../public/images/visa-flags/bahrain-flag.jpg";
import canadaFlag from "../public/images/visa-flags/canadaflag.jpg";
import chinaFlag from "../public/images/visa-flags/chinaflag.jpg";
import dubaiFlag from "../public/images/visa-flags/dubai-flag.jpg";
import germanyFlag from "../public/images/visa-flags/germany-flag.jpg";
import indonesiaFlag from "../public/images/visa-flags/indonesiaflag.jpg";
import italyFlag from "../public/images/visa-flags/italy-flag.jpg";
import japanFlag from "../public/images/visa-flags/japan-flag.jpg";
import malaysiaFlag from "../public/images/visa-flags/malaysia-Flag.jpg";
import myanmarFlag from "../public/images/visa-flags/Myanmarflag.jpg";
import omanFlag from "../public/images/visa-flags/oman-flag.jpg";
import philipineFlag from "../public/images/visa-flags/philippineflag.jpg";
import qatarFlag from "../public/images/visa-flags/qatar-flag.jpg";
import russiaFlag from "../public/images/visa-flags/russia-flag.jpg";
import saudiFlag from "../public/images/visa-flags/saudi-Arabia-flag.jpg";
import singaporeFlag from "../public/images/visa-flags/singapore-flag.jpg";
import southAfricaFlag from "../public/images/visa-flags/southafrica-flag.jpg";
import tajikistanFlag from "../public/images/visa-flags/tajikistan-flag.jpg";
import thailandFlag from "../public/images/visa-flags/thailandflag.jpg";
import turkishFlag from "../public/images/visa-flags/turkishflag.jpg";
import ukFlag from "../public/images/visa-flags/UK-visa.jpg";
import usaFlag from "../public/images/visa-flags/usa-visa.png";
import zimbabweFlag from "../public/images/visa-flags/Zimbabweflag.jpg";

import englandBg2 from "../public/images/inside-visa-images/england/england-2.jpg"
import englandBg3 from "../public/images/inside-visa-images/england/england-3.jpg"
import englandBg4 from "../public/images/inside-visa-images/england/england-4.jpg"

import { Link } from "react-router-dom";
import Header from "./components/header/Header";
import FindMainSection from "./homeComponents/FindMainSection";
// import Link from "next/link";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Visas = () => {
  // const location = useLocation();
  // const { visaProp } = location.state || {};
  // console.log(visaProp , "VISA")

  const visaCountries = [
    {
      id: 0,
      flag: ukFlag,
      name: "UNITED KINGDOM",
      bg: "bg-england-banner-image",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
    },
    {
      id: 1,
      flag: usaFlag,
      name: "AMERICA",
      message: "Experience the diverse landscapes of America",
    },
    {
      id: 2,
      flag: austriliaFlag,
      name: "AUSTRALIA",
      message: "Discover the wonders of Australia",
    },
    {
      id: 3,
      flag: azerbaijanFlag,
      name: "AZERBAIJAN",
      message: "Unveil the beauty of Azerbaijan",
    },
    {
      id: 4,
      flag: bahrainFlag,
      name: "BAHRAIN",
      message: "Experience the culture of Bahrain",
    },
    {
      id: 5,
      flag: canadaFlag,
      name: "CANADA",
      message: "Explore the vast wilderness of Canada",
    },
    {
      id: 6,
      flag: chinaFlag,
      name: "CHINA",
      message: "Delve into the ancient traditions of China",
    },
    {
      id: 7,
      flag: dubaiFlag,
      name: "DUBAI",
      message: "Discover the luxury and innovation of Dubai",
    },
    {
      id: 8,
      flag: germanyFlag,
      name: "GERMANY",
      message: "Experience the rich heritage of Germany",
    },
    {
      id: 9,
      flag: indonesiaFlag,
      name: "INDONESIA",
      message: "Explore the tropical paradise of Indonesia",
    },
    {
      id: 10,
      flag: italyFlag,
      name: "ITALY",
      message: "Enjoy the art and cuisine of Italy",
    },
    {
      id: 11,
      flag: japanFlag,
      name: "JAPAN",
      message: "Discover the fusion of tradition and modernity in Japan",
    },
    {
      id: 12,
      flag: malaysiaFlag,
      name: "MALAYSIA",
      message: "Experience the cultural diversity of Malaysia",
    },
    {
      id: 13,
      flag: myanmarFlag,
      name: "MYANMAR",
      message: "Uncover the mystical beauty of Myanmar",
    },
    {
      id: 14,
      flag: omanFlag,
      name: "OMAN",
      message: "Explore the enchanting landscapes of Oman",
    },
    {
      id: 15,
      flag: philipineFlag,
      name: "PHILIPPINES",
      message: "Discover the stunning islands of the Philippines",
    },
    {
      id: 16,
      flag: qatarFlag,
      name: "QATAR",
      message: "Experience the modern marvels of Qatar",
    },
    {
      id: 17,
      flag: russiaFlag,
      name: "RUSSIA",
      message: "Explore the vast expanse of Russia",
    },
    {
      id: 18,
      flag: saudiFlag,
      name: "SAUDI ARABIA",
      message: "Discover the ancient heritage of Saudi Arabia",
    },
    {
      id: 19,
      flag: singaporeFlag,
      name: "SINGAPORE",
      message: "Experience the vibrant cityscape of Singapore",
    },
    {
      id: 20,
      flag: southAfricaFlag,
      name: "SOUTH AFRICA",
      message: "Explore the diverse wildlife of South Africa",
    },
    {
      id: 21,
      flag: tajikistanFlag,
      name: "TAJIKISTAN",
      message: "Discover the rugged beauty of Tajikistan",
    },
    {
      id: 22,
      flag: thailandFlag,
      name: "THAILAND",
      message: "Experience the tropical charm of Thailand",
    },
    {
      id: 23,
      flag: turkishFlag,
      name: "TURKEY",
      message: "Unveil the rich history of Turkey",
    },
    {
      id: 24,
      flag: zimbabweFlag,
      name: "ZIMBABWE",
      message: "Explore the natural wonders of Zimbabwe",
    },
  ];
  
  /* Props for FindMainSection */

  const dummyProp = "SADASDADSDAS";

  const searchHeading = "COUNTRIES";
  const subSearchHeading = "";
  const height = "";
  const btnText = "SEARCH";
  const placeHolder = "Country name";
  const headingColor = "text-gray-500";

  return (
    <div>
      <div className="visa-section-container ">
        <Header />
        <div>
          <div className="h-[500px] text-white flex flex-col  items-center justify-center">
            <div className="text-center">
              <div className="lg:text-[50px] text-5xl font-medium tracking-[2px]">
                Visa Ventures
              </div>
              <div className="text-md leading-[20px] lg:pt-4 pt-3 font-medium tracking-[1px] ">
                Your Gateway to Worldwide Exploration
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <FindMainSection
          searchHeading={searchHeading}
          subSearchHeading={subSearchHeading}
          height={height}
          btnText={btnText}
          placeHolder={placeHolder}
          headingColor={headingColor}
        />
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {visaCountries.map((item, index) => (
            <div key={index} className="my-5">
              <Link to="/visaDetails" state={{ name: item.name, bg: item.bg , bg2 : item.bg2 , bg3 : item.bg3 , bg4 : item.bg4 , message : item.message }}>
                <div className="flex justify-center items-center h-48 w-full">
                  <img
                    src={item.flag}
                    alt={`${item.name} flag`}
                    className="h-full w-full"
                  />
                </div>
              </Link>
              <div className="bg-[#57c0e4] text-2xl text-center text-white font-semibold p-2">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="bg-red-500">
        <Link href={`/visas/${dummyProp}`}>asdasda</Link>
      </div> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Visas;
