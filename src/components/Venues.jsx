import React from "react";
import { categories } from "../data/data.js";

const Venues = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="font-bold text-4xl text-center">
          Venues on a Budget!
      </h1>
      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="rounded-xl relative"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img className="w-full" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Venues;
