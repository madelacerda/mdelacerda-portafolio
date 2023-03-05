import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "../assets/about.jpg";
import { styles } from "../styles";

const Hero = () => {
  return (
    // <section className="relative w-full h-screen mx-auto" id="home">
    //   <div
    //     className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
    //   >
    //     <div className="flex flex-col justify-center items-center mt-5">
    //       <div className="w-5 h-5 rounded-full bg-[#915eff]" />
    //       <div className="w-1 sm:h-80 h40 violet-gradient" />
    //     </div>
    //     <div>
    //       <h1 className={`${styles.heroHeadText} text-white`}>
    //         Hola, Soy <span className="text-[#915eff]">Matias</span>
    //       </h1>
    //       <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    //         Desarrollador Full Stack, experiencia en desarrollo de aplicaciones
    //         Web. <br className="sm:block hidden" /> utilizando distintas
    //         tecnologias como ReactJS, TypeScript, Angular, NodeJS y otras.
    //       </p>
    //     </div>
    //   </div>
    // </section>

    <section
      id="home"
      className="min-h-[85hv] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:items-center lg:gap-x-12">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Matias <span>De La Cerda Buzeta</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-4">Desarrollador</span>
              <br />
              <TypeAnimation
                sequence={[
                  "Front-End",
                  2000,
                  "Back-End",
                  2000,
                  "Full-Stack",
                  3000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            ></motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] "
          >
            <img
              src={Image}
              alt=""
              className="max-w-xs rounded-full shadow-xl shadow-blue-500/50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
