import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between bg-neutral px-[5%]">
      <div>
        <p className="text-3xl font-bold py-2">LOGO</p>
      </div>
      <div>
        <button className="btn btn-link text-success">Bn</button>/
        <button className="btn btn-link text-black">En</button>
      </div>
    </div>
  );
};

export default TopBar;
