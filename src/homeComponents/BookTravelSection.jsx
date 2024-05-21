// import Image from "next/image";
import React from "react";
import travelImg from "../../public/images/travel-image.png";

const BookTravelSection = () => {
  return (
    <div className="mt-24">
      <div className="lg:flex justify-center w-full">
        <div className="lg:w-6/12 flex justify-center ">
          <img src={travelImg} width={450} />
        </div>
        <div className="lg:w-6/12 flex flex-col justify-center text-center lg:text-left">
          <div className="pl-5 pr-5 lg:pr-0 lg:pl-10">
            <p className="tracking-[4px] text-[#b5b6b8] text-sm">
              EASY AND BEST TRIP PLANNING
            </p>
            <h2 className="tracking-[1px] text-[#4d4e50] text-3xl mt-1 font-medium">
              TRAVEL LIKE A STAR
            </h2>
            <h3 className="tracking-[2px] text-[#b5b6b8] text-sm lg:w-10/12 mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              neque distinctio ipsa nulla hic voluptate, iste ratione libero
              autem enim vero minima excepturi? Tenetur aliquid numquam impedit
              reiciendis voluptatum possimus fugiat nam maxime, natus ratione
              iure ad quasi deserunt libero?
            </h3>
            <div className="lg:block flex justify-center">
              <div className="custom-font-family border border-[#57c0e4] px-2 py-3 rounded-md bg-[#57c0e4] font-medium w-52 text-sm text-center text-white mt-10 cursor-pointer">
                LETS PLAN YOUR TRIP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTravelSection;
