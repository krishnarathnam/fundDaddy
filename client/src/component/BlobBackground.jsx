import React from "react";

export default function BlobBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Example blobs, you can add more or change colors/positions */}
      <svg className="absolute top-0 left-0 w-48 h-48 opacity-60" viewBox="0 0 200 200">
        <path fill="#A7F3D0" d="M40,-60C55,-50,70,-40,75,-25C80,-10,75,10,65,25C55,40,40,50,25,60C10,70,-10,80,-25,75C-40,70,-50,55,-60,40C-70,25,-80,10,-75,-10C-70,-30,-55,-50,-40,-60C-25,-70,-10,-80,10,-75C30,-70,50,-55,60,-40Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute top-20 right-0 w-56 h-56 opacity-50" viewBox="0 0 200 200">
        <path fill="#FDE68A" d="M40,-60C55,-50,70,-40,75,-25C80,-10,75,10,65,25C55,40,40,50,25,60C10,70,-10,80,-25,75C-40,70,-50,55,-60,40C-70,25,-80,10,-75,-10C-70,-30,-55,-50,-40,-60C-25,-70,-10,-80,10,-75C30,-70,50,-55,60,-40Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute bottom-0 left-10 w-64 h-64 opacity-40" viewBox="0 0 200 200">
        <path fill="#FCA5A5" d="M40,-60C55,-50,70,-40,75,-25C80,-10,75,10,65,25C55,40,40,50,25,60C10,70,-10,80,-25,75C-40,70,-50,55,-60,40C-70,25,-80,10,-75,-10C-70,-30,-55,-50,-40,-60C-25,-70,-10,-80,10,-75C30,-70,50,-55,60,-40Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute bottom-10 right-20 w-40 h-40 opacity-50" viewBox="0 0 200 200">
        <path fill="#93C5FD" d="M40,-60C55,-50,70,-40,75,-25C80,-10,75,10,65,25C55,40,40,50,25,60C10,70,-10,80,-25,75C-40,70,-50,55,-60,40C-70,25,-80,10,-75,-10C-70,-30,-55,-50,-40,-60C-25,-70,-10,-80,10,-75C30,-70,50,-55,60,-40Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
}
