import React, { useState } from "react";

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  return (
    <div
      className="h-screen flex justify-center items-center relative"
      onMouseMove={(e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }}
    >
      <div
        className="p-8 text-2xl bg-light-blue-200 rounded-md relative cursor-none"
        style={{
          // We still need inline styles for positioning the pseudo-cursor
          "--cursor-x": `${cursorPos.x - 10}px`,
          "--cursor-y": `${cursorPos.y - 10}px`,
        }}
      ></div>
      Hover over me!
      <div
        className="absolute w-5 h-5 rounded-full bg-red-500 pointer-events-none"
        style={{
          left: "var(--cursor-x)",
          top: "var(--cursor-y)",
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default Cursor;
