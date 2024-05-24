import React, { useState } from "react";
// import logo from "../../../../public/images/logo2.png";
// import Image from "next/image";
// import Link from "next/link";

import logo from "../../../public/images/rising-star-logo.png";
import hamburgerIcon from "../../../public/images/hamburger-icon.png";

import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";

const Header = ({ hideLi, toggleDrawer, headerBg, liColor}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const visaProp = "my visa";

  return (
    <div className={`header-container ${headerBg} `}>
      <div className="pt-4 px-6">
        <div className="flex justify-between items-center  text-[#ebe2e2]">
          <div className="flex justify-center items-center font-semibold text-3xl">
            {/* <div>
              <img src={logo} width={100} />
            </div> */}
            <Link to="/">
            <div>
              <img
                src={logo}
                width={60} // Set your desired width
                height={100} // Set your desired height
                // objectFit="contain"
                alt="Logo" // Always good to have an alt attribute for accessibility
              />
            </div>
            </Link>
          </div>

          <ul className={`lg:flex gap-10 text-2xl font-semibold hidden ${liColor} ${hideLi}`}>
            <li>Home</li>
            <li>Tours</li>
            <Link to="/visa" state={{ visaProp }}>
              <li>Visas</li>
            </Link>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>

          <ul className={`flex lg:hidden text-lg font-semibold ${liColor} ${hideLi}`}>
            <Link to="/visa" state={{ visaProp }}>
              <li>Visas</li>
            </Link>{" "}
          </ul>

          <div className="hidden lg:block border border-[#57c0e4] px-4 py-2 rounded-md bg-[#57c0e4] font-semibold">
            Consultation
          </div>

          <div className="block lg:hidden ">
            {/* <Button type="primary" >
                Open
              </Button> */}
            <div className="w-12">
              <img src={hamburgerIcon} onClick={showDrawer} />
            </div>
            <Drawer title="" onClose={onClose} open={open}>
              <div className="text-3xl text-white font-semibold underline">
                <p className="py-2">Home</p>
                <p className="py-2">Tours</p>

                <Link to="/visa" state={{ visaProp }}>
                  <p>Visas</p>
                </Link>
                <p className="py-2">Services</p>
                <p className="py-2">About</p>
                <p className="py-2">Contact</p>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
