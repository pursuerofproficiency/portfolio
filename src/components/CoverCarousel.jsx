import React, { useEffect, useState } from "react";

const images = [
  "/covers/cover1.jpg",
  "/covers/cover2.jpg",
  "/covers/cover3.jpg",
  "/covers/cover4.jpg",
  "/covers/cover5.jpg",
];

export default function CoverCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[60vh] relative overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={'Cover ${index + 1}'}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}