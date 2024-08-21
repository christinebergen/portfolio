import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";
import purple from "../assets/pink.png";
import SwirlyLine from "./SwirlyLine";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-neutral font-bold bg-gray-200 pr-2 pl-2 rounded-md" // Active link color
      : "text-gray-800 hover:text-white";
  };

  return (
    <nav className="bg-mainBackground shadow-2xl">
      <div className="container mx-auto flex justify-between items-center p-4 border-b-2">
        <div className="hidden md:flex flex-wrap md:text-xl space-x-6">
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
        <div className="flex flex-col md:flex-row md:items-center">
          <Link to="/">
            <div className="flex flex-row justify-center items-center">
              <div className="">
                <div className="flex flex-row justify-center items-center">
                  <img
                    src={purple}
                    alt=""
                    className="h-16 w-auto block md:hidden"
                  />
                  <div className="md:hidden block">
                    <h1 className="text-lg text-primary">
                      Christine Bergen <br></br>
                    </h1>
                    <h2 className="text-sm">
                      Information Technology Specialist
                    </h2>
                    <h2 className="text-sm">& Web Developer</h2>
                  </div>
                </div>
                <img src={purple} alt="" className="w-24 md:block hidden" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl md:text-3xl text-primary">
                  Christine Bergen <br></br>
                </h1>
                <h2>Information Technology Specialist</h2>
                <h2>& Web Developer</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-800 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-lightBackground shadow-xl`}
      >
        <SwirlyLine />
        <div className="flex flex-col items-start p-4 space-y-2">
          <Link
            className={getLinkClass("/")}
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className={getLinkClass("/about")}
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className={getLinkClass("/web")}
            to="/web"
            onClick={() => setIsOpen(false)}
          >
            Web Development
          </Link>
          <Link
            className={getLinkClass("/virtual")}
            to="/virtual"
            onClick={() => setIsOpen(false)}
          >
            System Operations
          </Link>
          <Link
            className={getLinkClass("/contact")}
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
