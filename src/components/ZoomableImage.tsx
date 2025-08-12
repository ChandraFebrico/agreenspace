"use client";

import { useState } from "react";
import Image from "next/image";

export default function ZoomableImage() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div
      onClick={() => setIsZoomed(!isZoomed)}
      className={`overflow-hidden w-full h-[260px] transition-transform duration-500 ${
        isZoomed
          ? "scale-150 cursor-zoom-out"
          : "scale-100 cursor-zoom-in"
      }`}
    >
      <Image
        src="/img/1.jpg"
        alt="Zoom plant holder"
        width={800} // Adjust based on your image
        height={600}
        className="object-cover w-full h-full drop-shadow-xl/50"
      />
    </div>
  );
}
