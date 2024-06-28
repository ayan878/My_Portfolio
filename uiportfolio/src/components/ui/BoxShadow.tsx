import React from "react";

function BoxShadow() {
  return (
    <div className="bg-white flex items-center justify-between">
      <div className="rounded-full justify-between flex px-6 py-2 font-bold bg-indigo-500 text-white w-fit transition-all shadow-[3px_6px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Welcome to my codeSpace
      </div>
    </div>
  );
}

export default BoxShadow;
