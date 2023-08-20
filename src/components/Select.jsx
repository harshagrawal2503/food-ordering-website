import React from "react";

const Select = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">

     <h1 className=" text-600 font-bold text-4xl text-center">SYLO Select</h1>
     <br/>
     

     <div className="grid grid-cols-3 gap-4">

      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Birthdays</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            EXCLUSIVE PLAN
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2832441/pexels-photo-2832441.png?auto=compress&cs=tinysrgb&w=300"
          alt="/"
        />
      </div>

      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Anniversaries</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            EXCLUSIVE PLAN
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/4175054/pexels-photo-4175054.jpeg?auto=compress&cs=tinysrgb&w=300"
           alt="/"
        />
      </div>

      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Baby Showers
          </p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            EXCLUSIVE PLAN
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="/"
        />
      </div>

      
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Farewell</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            EXCLUSIVE PLAN
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="/"
        />
      </div>

      
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Graduation</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            EXCLUSIVE PLAN
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="/"
        />
      </div>

      
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Wedding</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            EXCLUSIVE PLAN
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="/"
        />
      </div>


      </div>
    </div>
  );
};


export default Select;
