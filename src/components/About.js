import React from "react";
import headshot from "../assets/headshot.jpg";

const About = () => {
  return (
    <div className="py-8 w-3/4 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-zinc-200 rounded-lg flex flex-col md:flex-row justify-center items-start">
          <div className="md:bg-purple-100 md:p-10 mt-20 border-4 border-neutral rounded-3xl">
            <img src={headshot} className="w-60 h-auto rounded-3xl"></img>
          </div>
          <div className="p-20 w-1/2">
            <p className="text-gray-700">
              Having always had a keen eye for attention to detail and a love
              for and pretty things, Christine makes the perfect web developer.
              She recently returned to school to complete a 2 year Information
              Technology and Applied Systems Diploma at Vancouver Island
              University. Although this program focused mainly on full stack Web
              and Mobile Development and systems design principles and best
              practices, other aspects of IT work were practiced such as in
              depth Operating System functionality on different types of
              operating systems (Windows, MacOS, and Linux), Virtual Machine
              use, Shell Scripting, and Server/Systems Administration.
              <br></br>
              <br></br>Based on the principles of Computer Science but with
              loads of hands on technical experience, the VIU ITAS WMD program
              has prepared Christine's for any job within the tech industry.
              <br></br>
              <br></br>
              Starting from the days of Geocities web pages in the 90's, she has
              always had a keen interest in the world of Web Development, and
              has really enjoyed the dive into this exciting field. She quickly
              learned that she loved every aspect of front end dev work, and
              loves seeing each of the pages evolve into a refined final
              product.
              <br></br>
              <br></br>
              Over the past 13 years, Christine has worked in various different
              areas of healthcare and has developed a high level of
              understanding of the different departments and various technology
              struggles faced by health care workers. She is driven to become
              involved with the rapidly evolving technology in healthcare, and
              is currently searching for new job opportunities that can showcase
              both her extensive healthcare experience and her information
              technology expertise.
              <br></br>
              <br></br>
              Christine lives in Nanaimo, BC with her husband and cat Cleo. When
              she isn't working at the local hospital or designing websites, you
              can find her camping all over Vancouver Island, Traveling to
              Europe or the UK, or playing her Concertina.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
