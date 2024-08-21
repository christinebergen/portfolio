import React from "react";
import headshot from "../assets/headshot.jpg";
import travel1 from "../assets/travel.jpg";
import travel2 from "../assets/travel2.jpg"

const About = () => {
  return (
    <div className="py-8 w-full md:w-3/4 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-zinc-200 rounded-lg flex flex-col md:flex-row justify-center items-center md:items-start">
          <div className="bg-purple-100 p-4 md:p-10 mt-20 border-4 border-neutral rounded-3xl">
            <img src={headshot} className="w-60 h-auto rounded-3xl"></img>
            <img src={travel1} className="w-60 h-auto rounded-3xl mt-10"></img>
            <img src={travel2} className="w-60 h-auto rounded-3xl mt-10"></img>
          </div>
          <div className="px-6 py-10 w-full md:w-1/2 md:pl-10">
            <p className="text-gray-700">
              Christine is a meticulous and creative web developer with a
              passion for aesthetics and detail. Recently, she completed a
              two-year Information Technology and Applied Systems Diploma at
              Vancouver Island University, where she honed her skills in
              full-stack web and mobile development, systems design, and best
              practices. Her education also covered a range of IT disciplines,
              including operating system functionality across Windows, macOS,
              and Linux, virtual machine management, shell scripting, and
              server/systems administration.
              <br />
              <br />
              Drawing from foundational principles of computer science and
              hands-on technical experience, Christine is well-prepared for a
              diverse range of roles within the tech industry. Her journey began
              in the 90s with Geocities web pages, sparking a long-standing
              interest in web development. Through her studies, she discovered a
              love for front-end development and enjoys seeing each project
              evolve into a polished final product.
              <br />
              <br />
              With over 13 years of experience in various healthcare roles,
              Christine possesses a deep understanding of the challenges faced
              by healthcare workers and the technology they use. She is eager to
              contribute to the rapidly advancing field of healthcare technology
              and is actively seeking opportunities that leverage both her
              healthcare background and IT expertise.
              <br />
              <br />
              Christine resides in Nanaimo, BC, with her husband and their cat,
              Cleo. When she’s not working at the local hospital or designing
              websites, you’ll find her camping across Vancouver Island,
              traveling to Europe or the UK, or playing her concertina.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
