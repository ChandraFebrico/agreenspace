"use client"; // <-- Add this at the very top

import { JSX, useState } from "react";

export default function ZoomableImage(): JSX.Element {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsZoomed(!isZoomed)}
      className={` overflow-hidden cursor-zoom-in w-full h-[260px] transition-transform duration-500 ${
        isZoomed ? "scale-150 cursor-zoom-out" : "scale-100"
      }`}
    >
      <img
        src="/img/1.jpg"
        alt="Zoom plant holder"
        className="object-cover w-full h-full drop-shadow-xl/50"
      />
    </div>
  );
}
