import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-slate-800 justify-between px-10 h-10 items-center text-white">
      <div className="text-2xl myContainer font-bold">
        <span className="text-green-700">&lt;</span>
        <span>Pass</span>
        <span className="text-green-700">OP/&gt;</span>
      </div>
      <ol className="flex gap-5">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
      </ol>
    </div>
  );
};

export default Navbar;
