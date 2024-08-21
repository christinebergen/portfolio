import React from 'react';
import SwirlyLine from "./SwirlyLine";

const Contact = () => {
  return (
    <div className="py-8 w-full md:w-3/4 flex justify-center items-center">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className=" bg-zinc-200 rounded-lg flex flex-col justify-center items-center p-40">
          <h1 className="text-3xl text-primary">Contact Me</h1>
          <SwirlyLine/>
          <a href="mailto:functionalwebdesigns@gmail.com" className="text-blue-800 underline hover:font-bold">functionalwebdesigns@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
