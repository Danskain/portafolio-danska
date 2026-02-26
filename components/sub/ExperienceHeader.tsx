"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const ExperienceHeader = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center pt-20">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Experiencia Profesional
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Mi trayectoria laboral
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Construyendo el futuro una línea de código a la vez.
      </motion.div>
    </div>
  );
};
