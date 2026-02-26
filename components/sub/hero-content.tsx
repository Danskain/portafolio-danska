"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto ml-20 text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Portafolio de Desarrollador Full Stack
          </h1>
        </motion.div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ${isExpanded ? "max-h-0 opacity-0" : "max-h-[300px] opacity-100"}`}
        >
          <motion.div 
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-1 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Ofreciendo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              la mejor
            </span>{" "}
            experiencia en desarrollo.
          </span>
        </motion.div>
        </div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className={`text-lg text-gray-400 max-w-[600px] transition-[margin] duration-300 ${isExpanded ? "-mt-5 mb-0" : "my-0"}`}
        >
          {isExpanded ? (
            <>
              ingeniero de Sistemas orientado al desarrollo Full Stack con más de 5 años de experiencia, con capacidad para transformar requisitos en soluciones de software funcionales y eficientes. Apasionado por la programación, el análisis de sistemas y la integración de tecnologías multimedia. Con habilidades en diferentes lenguajes tanto como frontend y backend, complementadas con experiencia en soporte técnico, hardware y redes estructuradas que me permiten tener una visión integral de los proyectos. Reconocido por mi responsabilidad, liderazgo técnico y facilidad para trabajar en equipo en entornos ágiles (Scrum/Kanban). Descubre mis proyectos y habilidades.
              <span 
                onClick={() => setIsExpanded(false)} 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer font-bold ml-2 hover:opacity-80"
              >
                 Ver menos
              </span>
            </>
          ) : (
            <>
              ingeniero de Sistemas orientado al desarrollo Full Stack con más de 5 años de experiencia, con capacidad para transformar requisitos en soluciones de software funcionales y eficientes. Apasionado por la programación, el análisis de sistemas y la integración de tecnologías multimedia...
              <span 
                onClick={() => setIsExpanded(true)} 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer font-bold ml-1 hover:opacity-80"
              >
                Ver más
              </span>
            </>
          )}
        </motion.p>

        <motion.div 
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 z-50"
        >
          <a
            href="/hoja_de_vida_r.docx"
            download
            className="px-6 py-2 button-primary text-center text-white cursor-pointer rounded-full max-w-[220px] text-sm md:text-base font-medium shadow-md hover:scale-105 transition-transform"
          >
            Descargar HV
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
