import React from "react";
import { Link } from "react-router-dom";
import collections from "../data/collections";

function FeaturedCollections() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl text-center mb-2">Featured Collections</h2>
      <p className="text-center text-gray-500 mb-10">
        A selection of our most popular collections
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.slice(0, 3).map((itemm) => (
          <div key={itemm.id} className="group overflow-hidden rounded shadow">
            <img
              src={itemm.image}
              alt={itemm.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-600"
            />
            <div className="p-4">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {itemm.category}
              </p>
              <h3 className="text-xl mt-1">{itemm.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/collections"
          className="border border-black px-6 py-2 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition duration-400"
        >
          See All
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCollections;
