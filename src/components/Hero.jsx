import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" id="home">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, Soy <span className="text-[#915eff]">Matias</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desarrollador Full Stack, experiencia en desarrollo de aplicaciones
            Web. <br className="sm:block hidden" /> utilizando distintas
            tecnologias como ReactJS, TypeScript, Angular, NodeJS y otras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
