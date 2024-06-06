"use client";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";
import { Link } from "react-router-dom";

const FindMainSection = (props) => {
  const { Search } = Input;
  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
    },
  ];

  return (
    <div>
      <div
        className={`${props.height} ${props.headingColor} flex flex-col  items-center justify-center`}
      >
        <div className="text-center">
          <h2 className="lg:text-[43px] text-4xl font-medium tracking-[2px]">
            {props.searchHeading}
          </h2>
          <p className="lg:text-md text-sm leading-[20px] font-medium tracking-[1px] ">
            {props.subSearchHeading}
          </p>
        </div>
        <div>
          <Space direction="vertical" size="middle">
            <Space.Compact
              style={{
                // width: "lg:64vw sm:10vw",
                borderRadius: "0px",
                marginTop: "30px",
              }}
              className="lg:w-[64vw] w-[90vw]"
            >
              <Input placeholder={props.placeHolder} className="h-[35px] lg:h-[46px] " />
              <Link to="/visa">
              <Button className="bg-[#57c0e4] border border-[#57c0e4] h-[35px] lg:h-[46px] text-white font-semibold lg:text-sm text-xs">
                {props.btnText}
              </Button>
              </Link>
            </Space.Compact>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default FindMainSection;
