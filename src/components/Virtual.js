import React from "react";
import SwirlyLine from "./SwirlyLine";
import network from "../assets/network.png";
import knot from "../assets/network.pdf";
import pdf from "../assets/pdf.png";

function Virtual() {
  return (
    <div className="py-8 w-full md:w-3/4 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-zinc-200 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-primary text-3xl mt-10 text-center mb-10">
            System Operations Examples
          </h1>
          <p className="px-10 italic font-semibold mb-10">
            Vancouver Island University - Information Technology and Applied
            Systems: Web & Mobile Development program included a lot more than
            just web development. This is merely a small example of assignments
            that were completed for the course.{" "}
          </p>
          <SwirlyLine />
          <div className="flex flex-col justify-center items-center w-full rounded-lg md:p-10">
            <h2 className="text-xl md:text-3xl text-primary mb-4">
              Screencasts
            </h2>
            <div className="mx-10 border-2 border-zinc-400 shadow-xl p-8 rounded-lg mb-10">
              <h3 className="text-lg md:text-2xl mb-2">
                Linux Shell Scripting
              </h3>{" "}
              <p className="font-semibold mb-4 text-sm md:text-lg">
                Creating user accounts from a .csv (comma separated value) file.
              </p>
              <p className="text-left mb-4 text-sm md:text-lg">
                In this video, Christine demonstrates executing a shell script
                she wrote that will automatically take the user information from
                the .csv file specified and create user accounts. The accounts
                will consist of the program the user is in, their name
                transformed into the proper format for a username, and assigning
                a generic password. <br></br>
              </p>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full m:w-3/4 h-full md:h-3/4"
                  src="https://www.youtube.com/embed/BHsErQZAqqQ?si=A17C9lTqgqTMWPYk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mx-10 border-2 border-zinc-400 shadow-xl p-8 rounded-lg mb-10">
              <h3 className="text-lg md:text-2xl mb-2 text-right">
                Using a Linux Virtual Machine as a Server
              </h3>{" "}
              <p className="font-semibold mb-4 text-right text-sm md:text-lg">
                Utilizing Linux version CentOs to create a server to share
                internet to 2 other Linux Virtual Machines
              </p>
              <p className="text-right mb-4 text-sm md:text-lg ">
                This video uses 3 Linux Virtual Machines (VMs) all running
                within 1 host computer (Christine's laptop!). One VM will act as
                a server to "serve" internet to the other 2 VMs. Christine
                experienced some difficulties accomplishing the desired outcomes
                which are outlined in the video.
                <br></br>
              </p>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full m:w-3/4 h-full md:h-3/4"
                  src="https://www.youtube.com/embed/F3bYFTL3PyI?si=Rxyr9-X9TlxLa3OT"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mx-10 border-2 border-zinc-400 shadow-xl p-8 rounded-lg mb-10">
              <h3 className="text-lg md:text-2xl mb-2">
                Using a Linux Virtual Machine
              </h3>{" "}
              <p className="font-semibold mb-4 text-sm md:text-lg">
                One of the first screencasts Christine did while using a Virtual
                Machine with a Linux operating system!
              </p>
              <p className="mb-4 text-sm md:text-lg">
                In this video, Christine demonstrates using a Linux Operating
                System. Linux operating systems are commonly found in situations
                where a simple, effective, and secure operating system without a
                lot of "extras" is necessary. This video shows completing
                commands within the vi editor (which is used when shell
                scripting) within the command prompt , and demonstrating using 3
                programs on the Linux operating system.
                <br></br>
              </p>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full m:w-3/4 h-full md:h-3/4"
                  src="https://www.youtube.com/embed/dDhPjhafmvM?si=qIaaiph88XX5f-cr"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mx-10 border-2 border-zinc-400 shadow-xl p-8 rounded-lg mb-10">
              <h3 className="text-lg md:text-2xl mb-2 text-right">
                Windows System Backup and Restore
              </h3>{" "}
              <p className="font-semibold mb-4 text-right text-sm md:text-lg">
                A demonstration of a full Windows system backup and restore.
              </p>
              <p className="text-right mb-4 text-sm md:text-lg">
                This assignment tasked Christine with choosing a free version of
                backup and restore software, downloading the software, and then
                performing a full system backup and restore. This was performed
                on a Windows Virtual Machine.
                <br></br>
              </p>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full m:w-3/4 h-full md:h-3/4"
                  src="https://www.youtube.com/embed/gicFjjL2LZs?si=JIUCkTgErVUVShbp"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <SwirlyLine/>
            <div>
              <h2 className="text-xl md:text-3xl text-primary mb-4 text-center">
                Step by Step Guides
              </h2>
              <div className="mx-10 border-2 border-zinc-400 shadow-xl p-8 rounded-lg mb-10">
                <h3 className="text-lg md:text-2xl mb-2">The Network Knot</h3>{" "}
                <p className="font-semibold mb-4 text-sm md:text-lg">
                  A complex networking assignment to have a Windows VM, a Linux
                  VM, a macOS VM all talk to each other.
                </p>
                <p className="mb-4 text-sm md:text-lg">
                  A capstone project for the first semester of Christine's
                  diploma, this task was not an easy one. Networking 3 different
                  operating systems together to be able to talk to each other
                  sounds simple but it sure wasn't! Windows computers love to
                  talk to other windows computers, but not so much when it comes
                  to Linux and macOS! For submission of this project, Christine
                  created a 53(!) page document full of step by step
                  instructions and screen shots.
                  <br></br>
                  The PDF is included below if you're feeling bored 😉.
                  <br></br>
                </p>
                <div className="flex justify-center items-center">
                  <img
                    src={network}
                    className="w-full md:w-2/3 border-4 border-zinc-300 rounded-xl"
                  ></img>
                </div>
                <div className="flex justify-center">
                  <div className="w-full md:w-3/4 flex flex-row items-center justify-center p-4 bg-rose-100 hover:border-2 hover:shadow-xl rounded-xl mt-4">
                    <img src={pdf} className="h-12"></img>
                    <a
                      href={knot}
                      className="ml-2 text-blue-800 hover:font-bold underline text-center"
                    >
                      {" "}
                      Click here to download the Network Knot Documentation by
                      Christine Bergen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Virtual;
