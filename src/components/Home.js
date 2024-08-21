import React from "react";
import SwirlyLine from "./SwirlyLine";
import footcare from "../assets/footcare.png";
import bagpipe from "../assets/bagpipe.png";
import irish from "../assets/irish.png";
import iatracker from "../assets/iatracker.png";
import network from "../assets/network.png";
import linux from "../assets/linux.png";



const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-mainBackground text-neutral min-h-screen">
      <div className="w-full md:w-3/4 mt-8 pt-10 bg-zinc-200 p-4 rounded-lg">
        <h1 className="text-primary text-center text-xl md:text-2xl">
          Web Development and System Operations Portfolio
        </h1>
        <SwirlyLine />
        <div className="flex flex-col md:flex-row">
          <a
            className="w-full md:w-1/2 bg-rose-100 md:mr-4 text-center rounded-lg p-4 hover:border-2 border-secondary hover:shadow-xl cursor-pointer hover:bg-rose-200 transition ease-in-out duration-200"
            href="/web"
          >
            <h2 className="text-lg md:text-2xl underline mb-2">Websites</h2>
            <p>Explore all websites and web apps created by Christine</p>
            <p className="text-sm mt-2 text-gray-600 italic">Click here to view the full web portfolio</p>
            <div className="flex flex-wrap justify-center">
              <img
                src={bagpipe}
                className="w-3/4 border-4 rounded-lg border-zinc-400 m-4"
              ></img>
              <img
                src={irish}
                className="w-3/4 float-right border-4 rounded-lg border-zinc-400 m-4"
              ></img>
              <img
                src={footcare}
                className="w-3/4 border-4 rounded-lg border-zinc-400 m-4"
              ></img>
              <img
                src={iatracker}
                className="w-3/4 float-right border-4 rounded-lg border-zinc-400 m-4"
              ></img>
            </div>
          </a>
          <a
            className="w-full md:w-1/2 bg-rose-100 text-center rounded-lg p-4 hover:border-2 border-secondary hover:shadow-xl mt-10 md:mt-0 cursor-pointer hover:bg-rose-200 transition ease-in-out duration-200"
            href="/virtual"
          >
            <h2 className="text-lg md:text-2xl underline mb-2">System Operations</h2>
            <p>
              View screencasts and projects of system operations labs & assignments
            </p>
            <p className="text-sm mt-2 text-gray-600 italic">Click here to view all system operations content</p>
            <div className="flex flex-wrap justify-center">
              <img
                src={network}
                className="w-3/4 border-4 rounded-lg border-zinc-400 m-4 float-right"
              ></img>
              <img
                src={linux}
                className="w-3/4 border-4 rounded-lg border-zinc-400 m-4"
              ></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
