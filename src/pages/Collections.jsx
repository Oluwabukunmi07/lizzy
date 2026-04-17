import React from "react";
import collections from "../data/collections";

function Collection() {
  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl text-center mb-2">Our Collections</h1>
      <p className="text-center text-gray-500 mb-10">
        Handcrafted pieces for every occasion
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2">
        {collections.map((item) => (
          <div key={item.id} className="group overflow-hidden rounded shadow">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-4">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {item.category}
              </p>
              <h3 className="text-xl mt-1">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
