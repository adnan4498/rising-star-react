import React from "react";
// import risingLogo from "../public/images/rising-star-logo-2.jpg"
import risingLogo from "../public/images/rising-star-logo.png";

import fbIcon from "../public/images/fb-icon.png";
import instaIcon from "../public/images/insta-icon.png";
import whatsappIcon from "../public/images/whatsapp-icon.png";

const Footer = () => {
  return (
    <div className="mt-14 lg:mt-20 border-t-2 border-[#57c0e4]">
      <div className="mt-5  flex flex-col lg:flex-row items-center lg:justify-between lg:px-10 justify-center">
        <div className="mt-10 lg:mt-0">
          <img src={risingLogo} className="w-28 lg:w-36" />
        </div>

        <div className="flex flex-col items-center lg:items-start gap-2 text-lg font-semibold text-[#57c0e4] mt-5">
          <div>Terms of Services</div>
          <div>General Terms and Conditions</div>
          <div>Privacy Policy</div>
          <div>Visa Section</div>
        </div>

        <div className="flex lg:flex-col items-center gap-4 mt-5">
          <div className="text-3xl font-semibold lg:block hidden">Get in touch</div>
          <div className="lg:flex flex items-center gap-4">
            <div className="w-[52px] border rounded-full bg-white cursor-pointer">
              <a
                href="https://www.facebook.com/share/dtjsHPpzRNmQ8jEj/?mibextid=qi2Omg"
                target="_blank"
              >
                <img src={fbIcon} />
              </a>
            </div>
            <div className="w-12 border rounded-full bg-white cursor-pointer">
              <a
                href="https://www.instagram.com/risingstartravelsofficial/"
                target="_blank"
              >
                <img src={instaIcon} className="w-[80%]" />
              </a>
            </div>
            <div className="w-12 border rounded-full bg-white cursor-pointer">
                <img src={whatsappIcon} className="w-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
