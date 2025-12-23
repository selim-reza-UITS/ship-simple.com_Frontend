import React from "react";
import plane from "../assets/plane.png";
import ship from "../assets/ship.png";
import container from "../assets/container.png";

export default function ShippingHero() {
  return (
    <section className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
              Know your final shipping cost before you buy
            </h1>

            <div className="space-y-2 text-[#1F1F1F] text-base sm:text-[16px] font-normal leading-[130%]">
              <p>
                From the USA or UK to Barbados — including duties, VAT, and
                local fees.
              </p>
              <p>
                Trusted by customers importing from Amazon, Walmart, ASOS, eBay
                & more.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-colors cursor-pointer w-full sm:w-auto justify-center">
              Calculating shipping cost
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] w-full max-w-[500px] lg:max-w-none mx-auto">
            {/* Main large image - bottom left */}
            <div className="absolute bottom-0 left-0 w-[57%] h-[35%] rounded-[10px] sm:rounded-[16px] overflow-hidden shadow-lg border-[6px] sm:border-[10px] border-[#F0F0F0] ">
              <img
                src={ship}
                alt="Cargo ship with containers"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top right image */}
            <div className="absolute top-[10%] right-[5%] sm:top-[15%] sm:right-[15%] lg:top-[79px] lg:right-[146px] w-[62%] h-[51%] rounded-[10px] sm:rounded-[16px] overflow-hidden shadow-lg border-[6px] sm:border-[10px] border-[#F0F0F0]">
              <img
                src={container}
                alt="Airplane cargo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="absolute top-[55%] right-0 sm:top-[60%] sm:right-[5%] lg:top-[266px] lg:right-[57px] w-[38%] h-[50%] rounded-[10px] sm:rounded-[16px] overflow-hidden shadow-lg border-[6px] sm:border-[10px] border-[#F0F0F0]">
              <img
                src={plane}
                alt="Container port at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
