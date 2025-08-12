import React from "react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";

const Gallerypix = () => {
  const images = [
    // { src: " /favy.jpg", alt: "photo 1" },
    { src: "/rb-1.jpg", alt: "photo 1" },
    { src: "/rb-2.jpg", alt: "photo 2" },
    { src: "/rb-3.jpg", alt: "photo 3" },
    { src: "/rb-15.jpg", alt: "photo 4" },
    { src: "/rb-5.jpg", alt: "photo 5" },
    { src: "/rb-6.jpg", alt: "photo 6" },
    { src: "/rb-7.jpg", alt: "photo 7" },
    { src: "/rb-8.jpg", alt: "photo 8" },
    { src: "/rb-9.jpg", alt: "photo 9" },
    { src: "/rb-10.jpg", alt: "photo 10" },
    { src: "/rb-11.jpg", alt: "photo 11" },
    { src: "/rb-12.jpg", alt: "photo 12" },
    { src: "/rb-13.jpg", alt: "photo 13" },
    { src: "/rb-14.jpg", alt: "photo 14" },
    { src: "/rb-4.jpg", alt: "photo 15" },
    { src: "/rb-20.jpg", alt: "photo 16" },
    { src: "/rb-17.jpg", alt: "photo 17" },
    { src: "/rb-21.jpg", alt: "photo 18" },
    { src: "/rb-19.jpg", alt: "photo 19" },
    { src: "/rb-16.jpg", alt: "photo 20" },
    { src: "/rb-18.jpg", alt: "photo 21" },
    { src: "/rb-22.jpg", alt: "photo 22" },
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
            className="absolute bottom-2 right-2 bg-gray=500 bg-opacity-60 text-white px-2 py-1 rounded text-xs opacity-100 md:opacity-0 group-hover:opacity-100"
          >
            <BiDownload className="h-8  w-8 md:h-6 md:w-6" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallerypix;
