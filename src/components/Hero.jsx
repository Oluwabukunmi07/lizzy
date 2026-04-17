import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-stone-100 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-600">
          Lizzy Fashion
        </p>
        <h1 className="text-5xl leading-tight text-gray-900 md:text-7xl">
          Elegant Fashion for Every Occasion
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 mb-5">
          Discover styles designed to make you feel confident and beautiful.
        </p>
        <Link
          to="/collections"
          className="mt-8 rounded-full bg-black px-8 py-3 text-sm font-medium text-white hover:bg-gray-800 cursor-pointer uppercase tracking-[0.2em]"
        >
          View Collection
        </Link>
      </div>
    </section>
  );
}

export default Hero;
