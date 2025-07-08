import React from "react";
import CoverCarousel from "./CoverCarousel";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* ✅ Only render the carousel once */}
      <CoverCarousel />

      {/* ✅ Profile Image (large, centered, overlapping) */}
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-60 h-60 md:w-70 md:h-65 rounded-full border-4 border-white shadow-2xl overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ✅ Optional gradient fade below carousel */}
      <div className="w-full h-[20vh] bg-gradient-to-b from-transparent to-black" />
      <div className="h-6 md:h-8" />
    </div>
  );
}