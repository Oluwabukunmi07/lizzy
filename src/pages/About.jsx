import React from "react";

function About() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      {/* Section heading */}
      <h1 className="text-4xl text-center mb-2">About Us</h1>
      <p className="text-center text-gray-500 mb-12">
        The story behind Lizzy Fashion Home
      </p>

      {/* Two column layout */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Image placceholder */}
        <div className="w-full md:w-1/2 bg-gray-100 h-96 rounded flex items-center justify-center text-gray-400">
          Photo coming soon
        </div>

        {/* Right: Text content */}
        <div className="">
          <h2 className="text-3xl mb-4">Iyabo Olowofela</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Based in Akure, Ondo State, Nigeria, Iyabo Olowfela is the creative
            mind behind Lizzy Fashion Home. With over 10 years of experience,
            she has built a reputation for beautifully crafted Ankara and casual
            wear that celebrates african fashion
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every piece is made with intention - designed to make you feel
            confident, elegant, and uniquely yourself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
