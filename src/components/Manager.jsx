import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="flex flex-col  items-center mt-[40px]">
        <div className="text-2xl myContainer font-bold">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </div>
        <p>Your own password Manager</p>
        <div className="w-1/2 mt-3">
          <input type="text" placeholder="Enter website URL" className="w-full rounded-2xl border mb-6 border-green-400 px-4 py-1" />
          <div className="flex gap-3">
            <input type="text" placeholder="Enter Username" className="w-full rounded-2xl border mb-6 border-green-400 px-4 py-1"/>
            <input type="text" placeholder="Enter Password" className="w-1/3 rounded-2xl border mb-6 border-green-400 px-4 py-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
