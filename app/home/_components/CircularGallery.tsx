"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const animals = [
  { name: "Lion", img: "https://images.unsplash.com/photo-1583499871880-de841d1ace2a" },
  { name: "Elephant", img: "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef" },
  { name: "Panda", img: "https://images.unsplash.com/photo-1659540181281-1d89d6112832" },
  { name: "Tiger", img: "https://images.unsplash.com/photo-1500467525088-aafe28c0a95e" },
  { name: "Cheetah", img: "https://images.unsplash.com/photo-1541707519942-08fd2f6480ba" }
];

export default function CircularGallery() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const angle = scrollY * 0.1;

  return (
    <div className="h-[200vh] flex items-center justify-center bg-black text-white">
      <div
        className="relative w-100 h-100 transition-transform duration-200"
        style={{ transform: `rotateY(${angle}deg)` }}
      >
        {animals.map((animal, i) => {
          const itemAngle = (360 / animals.length) * i;

          return (
            <div
              key={i}
              className="absolute w-40 h-56 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotateY(${itemAngle}deg) translateZ(250px)`
              }}
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={animal.img}
                  alt={animal.name}
                  className="w-full h-40 object-cover"
                  width={200} 
                  height={300}
                />
                <p className="text-center p-2">{animal.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}