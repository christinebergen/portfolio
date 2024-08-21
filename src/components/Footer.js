import React from "react";
import { Link, useLocation } from "react-router-dom";
import SwirlyLine from "./SwirlyLine";

function Footer() {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-neutral font-bold bg-gray-200 pr-2 pl-2 rounded-md dark:text-white" // Active link color
      : "text-gray-800 hover:text-white dark:text-white";
  };
  return (
    <div className="bg-mainBackground flex flex-col pb-8 flex justify-center items-center">
      <SwirlyLine />
      <div className="flex flex-wrap justify-center md:text-xl space-x-6 mb-4 mr-2 ml-2">
        <Link className={getLinkClass("/")} to="/">
          Home
        </Link>
        <Link className={getLinkClass("/about")} to="/about">
          About
        </Link>
        <Link className={getLinkClass("/web")} to="/web">
          Web Development Portfolio
        </Link>
        <Link className={getLinkClass("/virtual")} to="/virtual">
          System Operations
        </Link>
        <Link className={getLinkClass("/contact")} to="/contact">
          Contact
        </Link>
      </div>
      
      <div>
        <h1 className="text-primary text-lg md:text-2xl">&copy;2024 Christine Bergen</h1>
      </div>
    </div>
  );
}

export default Footer;
