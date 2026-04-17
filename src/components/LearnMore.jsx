import React from "react";
import { Link } from "react-router-dom";

function AboutSnippet() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 mt-12">
      <h1 className="text-3xl text-gray-800 mb-2">About</h1>
      <p>
        Lizzy Fashion is a trendy clothing brand that focuses on providing
        high-quality, stylish apparel for the modern individual.
      </p>
      <Link
        to="/about"
        className="border border-1 p-2 mt-4 hover:bg-gray-800 hover:text-white transition duration-300 uppercase tracking-wide text-xs"
      >
        Learn More...
      </Link>
    </div>
  );
}

export default AboutSnippet;
