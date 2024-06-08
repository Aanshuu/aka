import { on } from "events";
import React from "react";
import * as FontAwesome from "react-icons/fa";

const Feature = ({ iconName, iconLabel, onClick}) => {
  const Icon = FontAwesome[iconName];
  return (
    <div className="flex items-center mr-5 cursor-pointer" onClick={onClick}>
      <div className="w-7 h-7 bg-gray-200 rounded-full flex justify-center items-center mr-1">
        <Icon className="text-white-500" />
      </div>
      <span className="whitespace-nowrap text-blue-500 ">{iconLabel}</span>
    </div>
  );
};

export default Feature;
