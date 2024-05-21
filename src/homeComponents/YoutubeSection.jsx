import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "../homeComponents/YoutubeSection.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import ReactPlayer from "react-player";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const YoutubeSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [playing, setPlaying] = useState({ is: false, id: "" });
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const [data, setData] = useState([
    { id: "yg61ryzBvB0" },
    { id: "ORDWo8V0Lr8" },
    { id: "lduOLcZm2Hw" },
    { id: "z2Xg3ost1wI" },
    { id: "BGldJi5fdPI" },
  ]);

  const handleSwiperNavigationClick = () => {
    setPlaying({ is: false, id: "" });
  };

  return (
    <div className="video-testing-container mt-10">

<div className="tracking-[4px] text-[#b5b6b8] text-sm lg:text-lg text-center" >NEWS & ACHIEVEMENTS</div>
      <div className="tracking-[1px] text-[#4d4e50] lg:text-3xl text-2xl text-center my-6 font-medium">
        FROM APPLICATION TO APPROVAL, CLIENTS VISA SUCCESS STORIES
      </div>

      {domLoaded && (
        <>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper3"
            onSwiper={(swiper) => {
              setThumbsSwiper(swiper);
              // Attach click event listener to navigation buttons
              swiper.navigation.prevEl.addEventListener(
                "click",
                handleSwiperNavigationClick
              );
              swiper.navigation.nextEl.addEventListener(
                "click",
                handleSwiperNavigationClick
              );
            }}
          >
            {data.map((video) => (
              <SwiperSlide key={video.id}>
                <ReactPlayer
                  onPlay={() => setPlaying({ is: true, id: video?.id })}
                  playing={playing.is && playing.id === video.id}
                  width={1000}
                  height={600}
                  url={`https://www.youtube.com/embed/${video.id}`}
                  className="react-player-class"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-5">
            <Swiper
              onSwiper={(swiper) => {
                setThumbsSwiper(swiper);
              }}
              loop={false}
              spaceBetween={10}
              slidesPerView={4.5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper react-player-images-class"
            >
              {data.map((video) => (
                <SwiperSlide key={video.id} className="">
                  <img
                    src={`http://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={`Thumbnail for video with ID ${video.id}`}
                    style={{ borderRadius: "5px", cursor: "pointer" }}
                    className="react-player-class"
                    onClick={() => handleSwiperNavigationClick()}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default YoutubeSection;
