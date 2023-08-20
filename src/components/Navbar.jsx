import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
  AiFillHeart,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet, FaTruckMoving } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (

    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      
      
      {/* left side */}
    <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl px-80" >
         <span className="text-green-600 font-bold text-4xl text-center"> Sylo's</span>
        </h1> */}
      </div>


      {/* Search Input*/}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Foods"
        />
      </div>


      {/*Cart Button */}
      <button
        type="button"
        className="bg-black text-white hidden md:flex items-center py-2 rounded-full"
      >
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>


      {/*Mobile Menu*/}
      {/*Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}





      {/*Side drawer menu */}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          SYLO <span className="font-bold">'s</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <FaTruckMoving size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <AiFillHeart size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <BiSolidHelpCircle size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Freinds
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;