import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaMailBulk } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="pb-20 pt-36">
      <div className="flex justify-center md:justify-center">
        <img
          src="logo1.png"
          alt="logo"
          width={300}
          height={300}
          className="mx-auto md:mx-0"
        />
      </div>
      <div>
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

      <div className="flex justify-center relative my-20 z-10">
        <div
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]
        flex flex-col items-center justify-center"
        >
          <h1 className="font-bold uppercase tracking-widest text-lg text-center text-blue-900 max-w-80">
            InSitu Systems est une entreprise française 🇫🇷 spécialisée dans les
            objets connectés au service des métiers de l’eau.
          </h1>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Nous développons et fabriquons une solution de supervision dédiée à chaque application. 
          Une gamme de produits complète : matérielle et logicielle."
          />

          <p
            className="text-center mt-3 md:tracking-wider 
          text-sm md:text-lg lg:text-2xl"
          >
            Avec un standard pour chaque application,{" "}
            <span className="text-blue-900 italic">InSitu Systems</span> propose
            aux collectivités un outil de{" "}
            <span className="font-bold">supervision léger et durable</span>
          </p>

          <a className="mt-3" href="#contact">
            <MagicButton
              title="Contact"
              icon={<FaMailBulk />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
