import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, staff } from "@/data";
import { Spotlight } from "./ui/Spotlight";

const Staff = () => {
  return (
    <div className="py-20" id="staff">
      <h2 className="mb-5 text-center text-[40px] md:text-5xl lg:text-6xl text-blue-900">
        Notre Équipe{" "}
      </h2>

      <div className="relative">
        {/* Spotlight traversant toute la largeur de la section */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="yellow"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={staff} direction="right" speed="slow" />

        <h3 className="mt-5 mb-5 text-center text-[24px] md:text-[28px] lg:text-[30px] text-blue-900">
          Nos Partenaires
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-lg:mt-10">
          {companies.map(({ id, img, name }) => (
            <div key={id} className="flex md:max-w-[100px] max-w-[60px] gap-2">
              <img src={img} alt={name} className="md:w-[90px] w-[90px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
