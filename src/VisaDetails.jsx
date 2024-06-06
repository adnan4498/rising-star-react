import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/header/Header";

const VisaDetails = () => {
  const location = useLocation();

  const { name, bg, message, visaRequirements, duration } = location.state || {}; // Destructure 'name' from state

  const hideLi = "hidden";
  const toggleDrawer = true;

  console.log(visaRequirements, "rrr");

  return (
    <div className="mb-20">
      <div className={`${bg} bg-cover bg-center h-screen  relative `}>
        <div className="w-full fixed bg-white">
          <Header hideLi={hideLi} toggleDrawer={toggleDrawer} />
        </div>

        <div className="absolute top-[60%] text-center  left-1/2 -translate-x-1/2">
          <div className="">
            <div className="text-white text-6xl font-semibold">{name}</div>
            <div className="text-white text-base font-semibold">{message}</div>
          </div>
        </div>
      </div>

      {/* <div className="mt-10 block lg:flex">
        <div className="text-lg bg-[#E3E3E1] lg:w-6/12 lg:text-left lg:pl-5 text-center py-6 lg:pt-10 lg:pb-10">
          <h2 className="text-5xl font-semibold lg:pb-8 ">About</h2>

          <p className="mt-4 text-base lg:w-10/12">
            {" "}
            The UK's history is rich and complex, beginning with ancient Celtic
            tribes, followed by Roman, Anglo-Saxon, and Norman invasions. In
            1603, the Union of the Crowns united Scotland and England under one
            monarch, and the Acts of Union in 1707 formally created the Kingdom
            of Great Britain.<br></br> <br></br> The inclusion of Ireland in
            1801 led to the formation of the United Kingdom, and after most of
            Ireland gained independence in 1922, the current United Kingdom of
            Great Britain and Northern Ireland was established. <br></br>{" "}
            <br></br> Popular sports include football, rugby, cricket, and
            tennis, with notable events like Wimbledon and the Premier League.
            Overall, the United Kingdom combines a rich historical heritage with
            modern cultural and economic vitality, making it a prominent global
            influence and a fascinating place to visit or study.
          </p>
        </div>
        <div className="lg:w-6/12">
          <img src={bg2} className="w-full h-full" />
        </div>
      </div>

      <div className="mt-10 block lg:flex lg:flex-row-reverse">
        <div className="text-lg bg-[#E3E3E1] lg:w-6/12 lg:text-left lg:pl-5 text-center py-6 lg:pt-10 lg:pb-10">
          <h2 className="text-5xl font-semibold lg:pb-8 ">Economy</h2>

          <p className="mt-4 text-base lg:w-10/12">
            {" "}
            The UK's history is rich and complex, beginning with ancient Celtic
            tribes, followed by Roman, Anglo-Saxon, and Norman invasions. In
            1603, the Union of the Crowns united Scotland and England under one
            monarch, and the Acts of Union in 1707 formally created the Kingdom
            of Great Britain.<br></br> <br></br> The inclusion of Ireland in
            1801 led to the formation of the United Kingdom, and after most of
            Ireland gained independence in 1922, the current United Kingdom of
            Great Britain and Northern Ireland was established. <br></br>{" "}
            <br></br> Popular sports include football, rugby, cricket, and
            tennis, with notable events like Wimbledon and the Premier League.
            Overall, the United Kingdom combines a rich historical heritage with
            modern cultural and economic vitality, making it a prominent global
            influence and a fascinating place to visit or study.
          </p>
        </div>
        <div className="lg:w-6/12">
          <img src={bg3} className="w-full h-full" />
        </div>
      </div>

      <div className="mt-10 block lg:flex">
        <div className="text-lg bg-[#E3E3E1] lg:w-6/12 lg:text-left lg:pl-5 text-center py-6 lg:pt-10 lg:pb-10">
          <h2 className="text-5xl font-semibold lg:pb-8 ">Facts</h2>

          <p className="mt-4 text-base lg:w-10/12">
            {" "}
            The UK's history is rich and complex, beginning with ancient Celtic
            tribes, followed by Roman, Anglo-Saxon, and Norman invasions. In
            1603, the Union of the Crowns united Scotland and England under one
            monarch, and the Acts of Union in 1707 formally created the Kingdom
            of Great Britain.<br></br> <br></br> The inclusion of Ireland in
            1801 led to the formation of the United Kingdom, and after most of
            Ireland gained independence in 1922, the current United Kingdom of
            Great Britain and Northern Ireland was established. <br></br>{" "}
            <br></br> Popular sports include football, rugby, cricket, and
            tennis, with notable events like Wimbledon and the Premier League.
            Overall, the United Kingdom combines a rich historical heritage with
            modern cultural and economic vitality, making it a prominent global
            influence and a fascinating place to visit or study.
          </p>
        </div>
        <div className="lg:w-6/12">
          <img src={bg4} className="w-full h-full" />
        </div>
      </div> */}

      <div>
        <div>
          <div className="border border-[#57c0e4] px-4 py-2 text-white text-4xl mt-10 bg-[#57c0e4] font-semibold">
            Visa Requirements
          </div>
        </div>

        <div className="text-sm pl-2 pt-6">
          <div class="">
            {/* <ul>
              <li>
                <strong className="text-lg">Original passport</strong>:{" "}
                <li class="list-disc list-inside">
                  with 8 months validity; attach previous passport if any.
                </li>
              </li>
              <li className="mt-3">
                <strong className="text-lg">
                  Account maintenance certificate
                </strong>
                :{" "}
                <li class="list-disc list-inside ">
                  {" "}
                  with bank statement for the last six months. (Minimum closing
                  balance Rs: 250,000 for a single person) must be attested by
                  the Ministry of Foreign Affairs.
                </li>
              </li>
              <li className="mt-3">
                <strong className="text-lg">Work Proof</strong>:
                <ul class="list-disc list-inside pl-4">
                  <li>
                    If the applicant has their own business, provide NTN,
                    visiting card, and company's letterhead.
                  </li>
                  <li>
                    If the applicant is employed, provide the company's joining
                    letter, last 6 months' salary slip, and leave letter.
                  </li>
                </ul>
              </li>
              <li className="mt-3">
                <strong className="text-lg">Valid CNIC copy</strong>.
              </li>
              <li className="mt-3">
                <strong className="text-lg">
                  Police Character Certificate
                </strong>
                .
              </li>
              <li className="mt-3">
                <strong className="text-lg">Photographs</strong>:{" "}
                <li class="list-disc list-inside">
                  {" "}
                  4 photographs (35*45 mm) with a white background.
                </li>
              </li>
              <li className="mt-3">
                <strong className="text-lg">
                  Family Registration Certificate (FRC)
                </strong>
                :{" "}
                <li class="list-disc list-inside">
                  {" "}
                  If traveling with family, provide an FRC.
                </li>
              </li>
              <li className="mt-3">
                <strong className="text-lg">Marriage Certificate</strong>:{" "}
                <li class="list-disc list-inside">
                  If a couple is traveling, provide a Nadra computerized
                  marriage certificate.
                </li>
              </li>
            </ul> */}
            {visaRequirements?.map((item , index)=> (
              <div className="lg:text-lg text-base font-semibold p-1">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="border border-[#57c0e4] px-4 py-2 text-white text-4xl mt-10 bg-[#57c0e4] font-semibold">
            Processing Time
          </div>
          <h2 className="lg:text-lg text-base font-semibold pl-3 pt-3">
            {duration}
          </h2>
        </div>
      </div>

      {/* <div className="h-[700px]">asdasd</div> */}
    </div>
  );
};

export default VisaDetails;

