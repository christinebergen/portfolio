import React from "react";
import SwirlyLine from "./SwirlyLine";
import footcare from "../assets/footcare.png";
import bagpipe from "../assets/bagpipe.png";
import irish from "../assets/irish.png";
import iatracker from "../assets/iatracker.png";
import network from "../assets/network.png";
import linux from "../assets/linux.png";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-mainBackground text-neutral ">
      <div className="w-full md:w-3/4 mt-8 pt-10 bg-zinc-200 p-4 rounded-lg">
        <h1 className="text-primary text-center text-xl md:text-2xl">
          Web Development and System Operations Portfolio
        </h1>
        <SwirlyLine />
        <div className="flex flex-col md:flex-row">
          <a
            className="w-full md:w-1/2 bg-rose-100 md:mr-4 text-center rounded-lg p-4 hover:border-2 border-secondary hover:shadow-xl"
            href="/web"
          >
            <h2 className=" text-lg md:text-2xl underline mb-2">Websites</h2>
            <p>Explore the websites and web apps created by Christine</p>
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
          </a>
          <a
            className="w-full md:w-1/2 bg-purple-200 text-center rounded-lg p-4 hover:border-2 border-secondary hover:shadow-xl mt-10 md:mt-0"
            href="/virtual"
          >
            <h2 className="text-lg md:text-2xl underline mb-2">
              System Operations
            </h2>
            <p>
              View Screencasts and projects of System Operations labs &
              assignments
            </p>
            <img
              src={network}
              className="w-3/4 border-4 rounded-lg border-zinc-400 m-4 float-right"
            ></img>
            <img
              src={linux}
              className="w-3/4 border-4 rounded-lg border-zinc-400 m-4"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
