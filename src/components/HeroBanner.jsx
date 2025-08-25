import React from "react";
import Grass from "../assets/GrassLand.png";
import Hand from "../assets/Hand.png";
import InvestmentConsult from "./InvestmentConsult";

export default function HeroBanner() {
  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-0">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[500px] overflow-visible">
        {/* Yellow border */}
        <svg
          className="absolute right-[60px] top-[80px] w-[65%] h-[250px] pointer-events-none z-10"
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="8"
            width="584"
            height="184"
            rx="6"
            fill="none"
            stroke="#F6C043"
            strokeWidth="12"
          />
        </svg>

        {/* Text inside yellow border */}
        <div className="absolute right-[95px] top-[130px] w-[55%] z-20">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-gray-900 leading-snug">
            Get Real With <span className="text-gray-900">Real Estate.</span>
          </h1>
          <p className="mt-3 text-[20px] font-semibold text-gray-800">
            Explore Plots <span className="font-normal">With Us.</span>
          </p>
        </div>

        {/* Hand image */}
        <img
          src={Hand}
          alt="Hand holding house"
          className="absolute left-[160px] top-0 w-[150px] md:w-[180px] object-contain select-none pointer-events-none z-30"
        />

        {/* Grass image */}
        <img
          src={Grass}
          alt="Grass land"
          className="absolute bottom-32 left-96 -translate-x-1/2 w-[70%] sm:w-[60%] md:w-[30%] object-contain select-none pointer-events-none z-20 rotate-[3deg]"
        />
      </div>
    </section>
      <InvestmentConsult />
    </>
  );
}
