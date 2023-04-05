import React from "react";

function Loader() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-24 h-24 rounded-full rounded-es-none -rotate-45 bg-red-500 ring-[1rem] ring-red-300 animate-ping" />
    </div>
  );
}

export default Loader;
