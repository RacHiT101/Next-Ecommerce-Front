"use client"

import { useState } from "react";



export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <div className="text-center">
        <img className="max-w-[100%] max-h-[200px]" src={activeImage} />
      </div>
      <div
        classname="border-2 border-ccc
    @if($active) border-ccc @else border-transparent @endif
    h-40 p-2 cursor-pointer rounded-5"
      >
        {images?.map((image) => (
          <div
            className="border-2 @if($active) border-ccc @else border-transparent @endif h-40 p-2 cursor-pointer rounded-5"
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <img className="max-w-[100%] max-h-[200px]" src={image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
