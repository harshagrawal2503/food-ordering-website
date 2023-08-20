import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <b>
              Get <span className="text-orange-500">50% off</span>
            </b>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <b> On your First Celebration
            </b>
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="/"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};
export default Hero;
