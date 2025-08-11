import React from "react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";

const Gallerypix = () => {
  const images = [
    // { src: " /favy.jpg", alt: "photo 1" },
    { src: "/favy3.jpg", alt: "photo 2" },
    { src: "/favy4.jpg", alt: "photo 3" },
    { src: "/favy6.jpg", alt: "photo 4" },
    { src: "/favy8.jpg", alt: "photo 5" },
    { src: "/favy10.jpg", alt: "photo 6" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 p-4  pt-5  md:grid-cols-4   ">
      {images.map((img, index) => (
        <div key={index} className="relative group">
          <Image
            src={img.src}
            alt={img.alt}
            width={350}
            height={350}
            className="rounded-lg object-cover"
          />
          <a
            href={img.src}
            download
            className="absolute bottom-2 right-2 bg-gray=500 bg-opacity-60 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100"
          >
            <BiDownload className="h-6  w-6" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallerypix;
