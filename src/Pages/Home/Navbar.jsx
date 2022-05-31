import React from "react";
import TopBar from "./Topbar";

const Navbar = () => {
  return (
    <div className="bg-neutral">
      <TopBar />
      <nav className="flex justify-between items-center text-secondary px-[5%]">
        <div className="flex gap-6 uppercase">
          <a href="/" className="text-primary">
            Home
          </a>
          <a href="#">Advertisers</a>
          <a href="#">Publishers</a>
          <a href="#">Influencers</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
        </div>
        <div className="bg-base-100 rounded-full px-4 py-2 flex gap-2 shadow-lg">
          <button className="btn button btn-ghost rounded-full">Login</button>
          <button className="btn btn-primary rounded-full text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
