import React from "react";
import SwirlyLine from "./SwirlyLine";
import footcare from "../assets/footcare.png";
import bagpipe from "../assets/bagpipe.png";
import irish from "../assets/irish.png";
import iatracker from "../assets/iatracker.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.webp";
import vercel from "../assets/vercel.svg";
import render from "../assets/render.webp";
import github from "../assets/github.png";
import html from "../assets/html.png";
import next from "../assets/next.png";
import firebase from "../assets/firebase.png";

function Web() {
  return (
    <div className="py-8 w-3/4 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-zinc-200 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-primary text-lg md:text-3xl mt-10 text-center">
            Completed Web Development Projects
          </h1>
          <div className="flex flex-col justify-center items-center w-full rounded-lg p-10">
            <img
              src={bagpipe}
              className="md:h-40 border-4 border-[#588368] rounded-lg"
            ></img>

            <a
              href="www.celticcoastbagpiper.vercel.app"
              className="text-blue-800 underline hover:font-bold my-4"
            >
              www.celticcoastbagpiper.vercel.app
            </a>

            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="w-full md:w-1/2 flex justify-center ">
                <p className="w-3/4 text-center md:text-right py-4">
                  This is a website that was created for a local Musician and
                  Bagpiper. The bagpiper wanted to promote his music lessons
                  business and musical performances of various groups he plays
                  with. The site was designed for ease of navigation and to
                  portray information in a clear and concise manner.
                </p>
              </div>
              <div className="w-full md:w-1/2 md:ml-8 flex flex-col justify-center items-center">
                <h3 className="text-lg text-center underline">
                  Website features:
                </h3>
                <ul>
                  <li className="flex flex-row items-center">
                    <img src={react} className="h-6 mr-2 rounded-lg"></img>
                    <p>
                      <a
                        href="https://react.dev/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        React
                      </a>{" "}
                      Development Library for efficient coding
                    </p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={vercel} className="h-6 mr-2 rounded-lg"></img>
                    <p>
                      Hosting & free domain with{" "}
                      <a
                        href="https://vercel.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        {" "}
                        Vercel
                      </a>{" "}
                    </p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={tailwind} className="h-4 mr-2"></img>
                    <p>
                      <a
                        href="https://tailwindcss.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        Tailwind
                      </a>{" "}
                      CSS
                    </p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={github} className="h-6 rounded-lg mr-2"></img>
                    <p>
                      <a
                        href="https://tailwindcss.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        GitHub
                      </a>{" "}
                      Version Control, code management, and deployment
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full rounded-lg p-10">
            <img
              src={irish}
              className="md:h-32 border-4 border-[#4D5D54] rounded-lg"
            ></img>

            <a
              href="https://www.nanaimoirishmusic.ca"
              className="text-blue-800 underline hover:font-bold my-4"
            >
              www.nanaimoirishmusic.ca
            </a>

            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="w-full md:w-1/2 flex justify-center ">
                <p className="w-3/4 text-center md:text-right py-4">
                  A website to promote an Irish Music Group in Nanaimo. The
                  colour palette is reminiscent of the colours of Ireland, and
                  meant to give the site a celtic feel.
                </p>
              </div>
              <div className="w-full md:w-1/2 md:ml-8 flex flex-col justify-center items-center">
                <h3 className="text-lg text-center underline">
                  Website features:
                </h3>
                <ul>
                  <li className="flex flex-row items-center">
                    <img src={html} className="h-6 rounded-lg mr-2"></img>
                    <p>HTML</p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={render} className="h-6 rounded-lg mr-2"></img>
                    <p>
                      Hosting with{" "}
                      <a
                        href="https://render.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        {" "}
                        Render
                      </a>{" "}
                    </p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={tailwind} className="h-4 mr-2"></img>
                    <p>
                      <a
                        href="https://tailwindcss.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        Tailwind
                      </a>{" "}
                      CSS
                    </p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={github} className="h-6 rounded-lg mr-2"></img>
                    <p>
                      <a
                        href="https://tailwindcss.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        GitHub
                      </a>{" "}
                      Version Control, code management, and deployment
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full rounded-lg p-10">
            <img
              src={footcare}
              className="md:h-32 float-left border-4 border-[#25A48B] rounded-lg"
            ></img>

            <a
              href="https://www.nursingfootcarenanaimo.ca"
              className="text-blue-800 underline hover:font-bold my-4"
            >
              www.nursingfootcarenanaimo.ca
            </a>

            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="w-full md:w-1/2 flex justify-center ">
                <p className="w-3/4 text-center md:text-right py-4">
                  It just so happens that a foot care nurse named Christine
                  hired web developer Christine to create a website for her. The
                  theme was meant to be whimsical and colourful. It was
                  important that the information would be displayed in a bold
                  and easy to read manner.
                </p>
              </div>
              <div className="w-full md:w-1/2 md:ml-8 flex flex-col justify-center items-center">
                <h3 className="text-lg text-center underline">
                  Website features:
                </h3>
                <ul>
                  <li className="flex flex-row items-center">
                    <img src={html} className="h-6 rounded-lg mr-2"></img>
                    <p>HTML</p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={render} className="h-6 rounded-lg mr-2"></img>
                    <p>
                      Hosting with{" "}
                      <a
                        href="https://render.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        {" "}
                        Render
                      </a>{" "}
                    </p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={tailwind} className="h-4 mr-2"></img>
                    <p>
                      <a
                        href="https://tailwindcss.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        Tailwind
                      </a>{" "}
                      CSS
                    </p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={github} className="h-6 rounded-lg mr-2"></img>
                    <p>
                      <a
                        href="https://tailwindcss.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        GitHub
                      </a>{" "}
                      Version Control, code management, and deployment
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <SwirlyLine />
          <h1 className="text-primary text-3xl mt-10 text-center">
            Web Development Projects In Progress
          </h1>
          <div className="flex flex-col justify-center items-center w-full rounded-lg p-10">
            <img
              src={iatracker}
              className="md:h-48 aspect-auto float-left border-4 border-[#039AC9] rounded-lg"
            ></img>

            <a
              href="https://iatracker.vercel.app"
              className="text-blue-800 underline hover:font-bold my-4"
            >
              https://iatracker.vercel.app
            </a>

            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="w-full md:w-1/2 flex justify-center ">
                <p className="w-3/4 text-center md:text-right py-4">
                  Started for a final project for school, this full stack web
                  app was created as an aid for the popular board game{" "}
                  <a
                    href="https://www.fantasyflightgames.com/en/products/star-wars-imperial-assault/"
                    className="text-blue-800 underline hover:font-bold"
                  >
                    "Star Wars Imperial Assault"
                  </a>
                  . The web app is intended to keep track of various pieces of
                  information between campaigns. The app ended up being a huge
                  amount of work, and is still in progress, although a good
                  amount of functionality was accomplished to submit for the final
                  project.
                </p>
              </div>
              <div className="w-full md:w-1/2 md:ml-8 flex flex-col justify-center items-center">
                <h3 className="text-lg text-center underline">
                  Website features:
                </h3>
                <ul>
                  <li className="flex flex-row items-center">
                    <img src={next} className="h-6 rounded-lg mr-2"></img>
                    <p>Next.js JavaScript development framework</p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={vercel} className="h-6 rounded-lg mr-2"></img>
                    <p>
                      Hosting with{" "}
                      <a
                        href="https://vercel.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        {" "}
                        Vercel
                      </a>{" "}
                    </p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={tailwind} className="h-4 mr-2"></img>
                    <p>
                      <a
                        href="https://tailwindcss.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        Tailwind
                      </a>{" "}
                      CSS
                    </p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={firebase} className="h-4 mr-4 rounded-md"></img>
                    <p>
                      <a
                        href="https://firebase.google.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        Firebase
                      </a>{" "}
                      User Authentication and Database Storage
                    </p>
                  </li>
                  <li className="flex flex-row items-center">
                    <img src={github} className="h-6 rounded-lg mr-2"></img>
                    <p>
                      <a
                        href="https://tailwindcss.com/"
                        className="text-blue-800 underline hover:font-bold"
                      >
                        GitHub
                      </a>{" "}
                      Version Control, code management, and deployment
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <SwirlyLine />
          <div className="flex flex-col justify-center items-center w-3/4 bg-rose-100 rounded-xl mb-20 mt-10">
            <h1 className="text-primary text-3xl mt-10 text-center">
              Un-Hosted projects and code examples
            </h1>
            <p className=" w-full md:w-3/4 mt-8 text-center">
              GitHub is an invaluable tool for code storage and seamless
              deployment to multiple hosting platforms. Click the link below to
              view Christine's code respository for current and past projects,
              including labs and assignments from the VIU ITAS - WMD program.
            </p>
            <img
              src={github}
              className="rounded-lg border-2 border-zinc-300 m-4"
            ></img>
            <a
              href="https://github.com/christinebergen"
              className="text-blue-800 underline hover:font-bold mb-8"
            >
              GitHub - Christine Bergen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
