import React from "react";

const SwirlyLine = () => {
  return (
    <svg
      className="w-full h-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 ,120 L0,120 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        className="text-pink-500"
      />
    </svg>
  );
};

export default SwirlyLine;
