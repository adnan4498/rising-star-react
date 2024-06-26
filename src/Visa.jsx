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

import englandBg2 from "../public/images/inside-visa-images/england/england-2.jpg";
import englandBg3 from "../public/images/inside-visa-images/england/england-3.jpg";
import englandBg4 from "../public/images/inside-visa-images/england/england-4.jpg";

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
      visaRequirements: [
        "2 recent photographs 35mm X 45mm, with a white background (non-glossy paper).",
        "Valid passport with at least three blank visa pages and six months validity beyond the intended stay. All previous passports used for travel or not. For lost passport, if not mentioned, then police report.",
        "Original signed letter from the applicant's company/employer stating name, position, salary, duration of employment, address and contact numbers of the employer, purpose and duration of visit to UK.",
        "Hotel booking or letter of invitation from the UK with passport copy.",
        "National sales tax certificate for individuals if any.",
        "Confirmation of flight reservation.",
        "Proof of arrangements (hotel booking) during the stay in UK.",
        "If you have been refused a visa by Embassy or High Commission in the last, explanation about reason for trip and refusal.",
        "Personal original bank statement updated for the last six months with bank letter.",
        "CNIC copy + Biform.",
        "Note: All visa charges are non-refundable in case of visa rejection or delay.",
      ],
      duration: ["15 to 20 working days"],
    },
    {
      id: 1,
      flag: usaFlag,
      name: "AMERICA",
      message: "Experience the diverse landscapes of America",
      bg: "bg-america-banner",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original Passport with 08 months validity; attach previous passport if any.",
        "Four Passport Size Pictures with White Background (Matte Finish paper).",
        "Account Maintenance Certificate with Bank Statement for the Last Six Months, showing a minimum balance of 250,000/-.",
        "Return Air Ticket.",
        "Hotel Booking Voucher.",
        "Travel Agency Undertaking on Letterhead.",
        "NADRA Marriage Certificate of Commerce.",
        "Note: All visa charges are non-refundable in case of visa rejection or delay.",
      ],
      duration: ["25 Working days."],
    },
    {
      id: 2,
      flag: austriliaFlag,
      name: "AUSTRALIA",
      message: "Discover the wonders of Australia",
      bg: "bg-australia-banner-2",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original Passport With 08 months validity; attach previous passport if any.",
        "Account Maintenance Certificate With Bank Statement for the Last Six Months, showing a minimum balance of 100,000/-.",
        "Return Air Ticket.",
        "Hotel Booking Voucher.",
        "Travel Agency Undertaking on Letterhead.",
        "Four Passport Size Pictures with White Background (Matte Finish Paper).",
        "NADRA Marriage Certificate & Valid CNIC Copy.",
        "NTN Certificate of Chamber of Commerce.",
        "Note: All visa charges are non-refundable in case of visa rejection or delay.",
      ],
      duration: ["3 to 4 weeks"],
    },
    {
      id: 3,
      flag: azerbaijanFlag,
      name: "AZERBAIJAN",
      message: "Unveil the beauty of Azerbaijan",
      bg: "bg-azerbaijan-banner",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original Passport With 08 months validity; attach previous passport if any.",
        "Four Passport Size Pictures with Blue Background.",
        "Valid CNIC Copy.",
        "Note: All visa charges are non-refundable in case of visa rejection or delay.",
      ],

      duration: ["1 month"],
    },
    {
      id: 4,
      flag: bahrainFlag,
      name: "BAHRAIN",
      message: "Experience the culture of Bahrain",
      bg: "bg-bahrain-banner",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original Passport With 08 months validity; attach previous passport if any.",
        "Account Maintenance Certificate With Bank Statement Last Six Month.",
        "Minimum Balance 300,000/- (For Single Person).",
        "Valid CNIC Copy.",
        "2 Passport size photographs in White Background (Matte finish paper).",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay.",
      ],
      duration: [
        "Bahrian Online Visit Visa Travel Validity 01 Month, Stay Validity 14 Days.",
      ],
    },
    {
      id: 5,
      flag: canadaFlag,
      name: "CANADA",
      message: "Explore the vast wilderness of Canada",
      bg: "bg-canada-banner",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original passport with a validity of at least six months, including at least one blank page.",
        "Copies of all previous passports.",
        "1 copy of most current passport pages bearing name and picture for each applicant.",
        "Copy of CNIC or Family 'B' form-Nadra-computerized (in case of accompanying children).",
        "2 passport-size photos (colour or black and white) for each person travelling. Photos must be no more than six months old, and must include the date of birth (day/month/year) and applicant's name printed clearly on the back of each photo.",
        "Letter of employment stating date hired, position, salary and confirming the dates and duration of your approved leave. If you are a housewife/student dependent on husband/parents, submit evidence of husband/father's employment.",
        "Updated Bank Statement of the last 6 months Personal/Company.",
        "Travel Plan reservation.",
        "Hotel Reservation.",
        "Any other documentation/information showing your ties to Pakistan.",
        "Note: All visa charges are non-refundable in case of Visa reject or Delay.",
      ],
      duration: ["Visa Processing Time 45 to 50 working days."],
    },
    {
      id: 6,
      flag: chinaFlag,
      name: "CHINA",
      message: "Delve into the ancient traditions of China",
      bg: "bg-china-banner",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original Passport With 08 months validity; attach previous passport if any.",
        "Account Maintenance Certificate With Bank Statement Last Six Month Minimum balance 300,000/-",
        "Two Photograph 2 X 2 with White Background (China Format Matte Finish Paper)",
        "Travel Agency Undertaking On Letterhead.",
        "Valid CNIC Copy",
        "Police Character Certificate",
        "Request Letter for Embassy on Company Letterhead with Visiting Card",
        "Family Detail.",
        "Note: All visa charges are non-refundable in case of Visa reject or Delay.",
      ],
      duration: ["4 to 6 weeks"],
    },
    {
      id: 7,
      flag: dubaiFlag,
      name: "DUBAI",
      message: "Discover the luxury and innovation of Dubai",
      bg: "bg-dubai-banner",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original Passport With 08 months validity; attach previous passport if any",
        "One Passport Size Picture with Blue or White Background",
        "Valid CNIC Copy",
        "Note: All visa charges are non-refundable in case of Visa reject or Delay",
      ],
      duration: ["4 to 6 working days"],
    },
    {
      id: 8,
      flag: germanyFlag,
      name: "GERMANY",
      message: "Experience the rich heritage of Germany",
      bg: "bg-germany-banner",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original Passport With 08 months validity; attach previous passport if any",
        "Account Maintenance Certificate With Bank Statement Last Six Month Minimum balance 20,0000",
        "Confirm Hotel Paid Voucher",
        "Confirm Return Air Ticket",
        "4 Passport size Recent photographs",
        "Work Proof",
        "Letter from the Applicant Address to the Visa Officer of the Consulate General",
        "Valid CNIC Copy",
        "Travel Insurance Policy or Letter",
        "Note: All visa charges are non-refundable in case of Visa reject or Delay",
      ],

      duration: ["3 to 4 weeks"],
    },
    {
      id: 9,
      flag: indonesiaFlag,
      name: "INDONESIA",
      message: "Explore the tropical paradise of Indonesia",
      bg: "bg-indonesia-banner",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original Passport With 08 Months validity; attach previous passport if any",
        "Account Maintenance Certificate With Bank Statement Last Six Month",
        "Travel Agency Undertaking On Letter Head",
        "Minimum Balance 250,000/- (For Single Person)",
        "Valid CNIC Copy",
        "Return Air Ticket",
        "2 Passport size photographs (Background should be White)",
        "Confirm Hotel Paid Voucher",
        "Request Letter for Embassy on Company Letterhead with Visiting Card",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay",
      ],

      duration: ["3 to 4 weeks"],
    },
    {
      id: 10,
      flag: italyFlag,
      name: "ITALY",
      message: "Enjoy the art and cuisine of Italy",
      bg: "bg-italy-banner",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original Passport With 08 months validity; attach previous passport if any.",
        "Account Maintenance Certificate With Bank Statement Last Six Month Minimum balance 300,000/-",
        "Two Photograph 2 X 2 with White Background (China Format Matte Finish Paper)",
        "Travel Agency Undertaking On Letterhead.",
        "Valid CNIC Copy",
        "Police Character Certificate",
        "Request Letter for Embassy on Company Letterhead with Visiting Card",
        "Family Detail.",
        "Note: All visa charges are non-refundable in case of Visa reject or Delay.",
      ],
      duration: ["4 to 6 weeks"],
    },
    {
      id: 11,
      flag: japanFlag,
      name: "JAPAN",
      message: "Discover the fusion of tradition and modernity in Japan",
      bg: "bg-japan-banner",
      bg2: englandBg2,
      bg3: englandBg3,
      bg4: englandBg4,
      message: "Explore the rich history of the United Kingdom",
      visaRequirements: [
        "Original Passport With 08 months validity; attach previous passport if any",
        "Account Maintenance Certificate With Bank Statement Last Six Month",
        "Return Air Ticket",
        "Hotel Booking Voucher",
        "Minimum Balance 100,000/- (For One Person)",
        "Travel Agency Undertaking On Letter Head",
        "Four Passport Size Picture with White Background (Matte Finish Paper)",
        "Nadra Marriage Certificate & Valid CNIC Copy",
        "NTN Certificate of Chamber of Commerce",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay",
      ],
      duration: ["15 to 20 days"],
    },
    {
      id: 12,
      flag: malaysiaFlag,
      name: "MALAYSIA",
      message: "Experience the cultural diversity of Malaysia",
      bg: "bg-malaysia-banner",
      visaRequirements: [
        "Original Passport with 08 months validity attach previous passport if any",
        "Account Maintenance Certificate With Bank Statement Last Six Month.",
        "Return Air Ticket",
        "Travel Agency Undertaking On Letter Head.",
        "Valid CNIC Copy",
        "Minimum Balance 100,000/- (For Single Person).",
        "Two Photographs Size (35 x 50) in White Back Ground (Mate finish paper).",
        "Request Letter for Embassy on Company Letterhead with Visiting Card.",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay."
      ],
      duration: ["Visa Processing Time 7 To 8 Working Days"]      
    },
    {
      id: 13,
      flag: myanmarFlag,
      name: "MYANMAR",
      message: "Uncover the mystical beauty of Myanmar",
      bg: "bg-myanmar-banner",
      visaRequirements: [
        "Original passport with 8 months validity attach previous passport if any. 2nd page must be signed",
        "2 Passport size recent photographs. (Background should be white, 4.8*3.8)",
        "Work Proof",
        "Valid CNIC copy",
        "FRC or MRC if family",
        "Applicant Mobile Number",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay."
      ],
      duration: ["Visa Processing Time 15 To 20 Working Days"]
      
    },
    {
      id: 14,
      flag: omanFlag,
      name: "OMAN",
      message: "Explore the enchanting landscapes of Oman",
      bg: "bg-oman-banner",
      visaRequirements: [
        "Original Passport With 08 months validity attach previous passport if any.",
        "Four Passport Size Picture with Blue Background.",
        "Valid CNIC Copy.",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay."
      ],
      duration: ["Visa Processing Time is 1 Month"]
      
    },
    {
      id: 15,
      flag: philipineFlag,
      name: "PHILIPPINES",
      message: "Discover the stunning islands of the Philippines",
      bg: "bg-philippines-banner",
      visaRequirements: [
        "Original passport with 8 months validity attach previous passport if any.",
        "Account maintenance certificate with bank statement last six months. (Minimum closing balance Rs: 250000 for single person) must be attested by the Ministry of Foreign Affairs.",
        "Work Proof (If applicant has his/her own business so he/she would have to provide NTN, visiting card, and company's letterhead. If applicant is working somewhere, he/she would have to provide company's joining letter, last 6 months salary slip, and leave letter).",
        "Valid CNIC copy.",
        "Police Character Certificate.",
        "4 photographs (35*45) size with white background.",
        "If a person will travel with family, he/she would have to provide FRC (Family Registration Certificate).",
        "If a couple will travel, they would have to provide Nadra computerized marriage certificate.",
        "Note: All visas charges are non-refundable in case of Visa rejection or delay."
      ],
      duration: ["Visa Processing Time 15 To 20 Working Days"]
      
    },
    {
      id: 16,
      flag: qatarFlag,
      name: "QATAR",
      message: "Experience the modern marvels of Qatar",
      bg: "bg-qatar-banner",
      visaRequirements: [
        "Original Passport With 08 months validity attach previous passport if any",
        "Four Passport Size Picture with Blue Background",
        "Valid CNIC Copy",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay"
      ],
      duration: ["Visa Processing Time is 1 Month"]
      
    },
    {
      id: 17,
      flag: russiaFlag,
      name: "RUSSIA",
      message: "Explore the vast expanse of Russia",
      bg: "bg-russia-banner",
      visaRequirements: [
        "Passport valid for at least 6 months after intended departure date from Russia",
        "Two passport-size photos signed on the back",
        "If Tour Group or Cruise Passenger: Letter from tour company or cruise line confirming itinerary and including a copy of the confirmation from authorized Russian travel company which shows the reference number and confirmation number for the visa",
        "If Individual Travel: Confirmation of hotel arrangements from authorized travel company, and Air tickets showing reference number/ PNR and confirmation number for the visa",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay",
        "Single entry/transit visa Rs. 20000 (issued in 10-15 days)",
        "Single entry/transit visa Rs. 30000 (issued in 5 - 7 days) URGENT",
        "Double/Multiple entry visa Rs. 38000 (issued in 10 - 15 days)",
        "Double/Multiple entry visa Rs. 48000 (issued in 5 - 7 day) URGENT",
        "The fee is paid in cash in Pakistani rupees at the time of submitting the Application form"
      ],
      duration: ["Visa Processing Time is 10-15 Days"]
    },
    {
      id: 18,
      flag: saudiFlag,
      name: "SAUDI ARABIA",
      message: "Discover the ancient heritage of Saudi Arabia",
      bg: "bg-saudi-banner",
      visaRequirements: [
        "Original Passport With 08 months validity attach previous passport if any",
        "Four Passport Size Picture with Blue Background",
        "Valid CNIC Copy",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay"
      ],
      duration: ["Visa Processing Time 15 To 16 Working Days"]
      
    },
    // {
    //   id: 19,
    //   flag: singaporeFlag,
    //   name: "SINGAPORE",
    //   message: "Experience the vibrant cityscape of Singapore",
    //   bg: "bg-singapore-banner",
    // },
    // {
    //   id: 19,
    //   flag: southAfricaFlag,
    //   name: "SOUTH AFRICA",
    //   message: "Explore the diverse wildlife of South Africa",
    //   bg: "bg-south-africa-banner",
    // },
    {
      id: 20,
      flag: tajikistanFlag,
      name: "TAJIKISTAN",
      message: "Discover the rugged beauty of Tajikistan",
      bg: "bg-tajikistan-banner",
      visaRequirements: [
        "Original Passport With 08 months validity attach previous passport if any",
        "Four Passport Size Picture with Blue Background",
        "Valid CNIC Copy",
        "Hotel Voucher",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay"
      ],
      duration: ["Visa Processing Time is 1 Month"]
      
    },
    // {
    //   id: 21,
    //   flag: thailandFlag,
    //   name: "THAILAND",
    //   message: "Experience the tropical charm of Thailand",
    //   bg: "bg-thailand-banner",
    // },
    {
      id: 19,
      flag: turkishFlag,
      name: "TURKEY",
      message: "Unveil the rich history of Turkey",
      bg: "bg-turkey-banner",
      visaRequirements: [
        "Account Maintenance Certificate With Bank Statement Last Six Month Minimum Balance 300,000/- (For Single Person)",
        "Two Photographs Size (2 x 2) in White Background (Matte finish paper)",
        "Original Passport with 08 months validity attach previous passport if any",
        "Return Air Ticket",
        "Confirm Hotel Paid Voucher",
        "Applicant Must Be Appearance In Embassy Fresh / Repeat",
        "Request Letter for Embassy on Company Letterhead with Visiting Card",
        "Valid CNIC Copy",
        "Travel Insurance Policy or Letter",
        "Polio vaccination Card",
        "NTN Certificate",
        "Note: All visas charges are non-refundable in case of Visa reject or Delay",
        "Turkey Tourist Single Entry Visa Travel Validity 03 Months, Stay Validity 01 Month"
      ],
      duration: ["Visa Processing Time to 15 to 20 Working Days"]
      
    },
    {
      id: 20,
      flag: zimbabweFlag,
      name: "ZIMBABWE",
      message: "Explore the natural wonders of Zimbabwe",
      bg: "bg-zimbabwe-banner",
      visaRequirements: [
        "Original passport with 8 months validity attach previous passport if any. 2nd page must be signed",
        "2 Passport size recent photographs. (Background should be white, 35*45 mm)",
        "Work Proof",
        "Valid CNIC copy",
        "FRC or MRC if family",
        "Applicant Mobile Number"
      ],
      duration: ["Visa Processing Time 15 To 20 Working days"]      
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

  const headerBg = "bg-white";
  const liColor = "text-black";

  return (
    <div>
      <div className="visa-section-container">
        <Header headerBg={headerBg} liColor={liColor} />
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
              <Link
                to="/visaDetails"
                state={{
                  name: item.name,
                  bg: item.bg,
                  message: item.message,
                  visaRequirements: item.visaRequirements,
                  duration: item.duration,
                }}
              >
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
