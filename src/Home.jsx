import React from "react";

import Header from "./components/header/Header";
import FindMainSection from "./homeComponents/FindMainSection";
import CarouselSection from "./homeComponents/CarouselSection";
import BookTravelSection from "./homeComponents/BookTravelSection";
import TopCountries from "./homeComponents/TopCountries";
import YoutubeSection from "./homeComponents/YoutubeSection";

const Home = () => {
  /* Props for FindMainSection */

  const searchHeading = "FIND THE PERFECT PLACE TO GO";
  const subSearchHeading =
    "Recieve the personalized recommendations for activities hotels, and more";
  const height = "h-[650px]";
  const btnText = "START PLANNING";
  const placeHolder = "Travel the World";
  const headingColor = "text-white";

  return (
    <>
      <div className="bg-image-div">
        <Header />
        <FindMainSection
          searchHeading={searchHeading}
          subSearchHeading={subSearchHeading}
          height={height}
          btnText={btnText}
          placeHolder={placeHolder}
          headingColor={headingColor}
        />
      </div>
      <CarouselSection />
      <BookTravelSection />
      <TopCountries />
      <YoutubeSection />
    </>
  );
};

export default Home;
