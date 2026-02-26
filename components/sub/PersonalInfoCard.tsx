"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/lib/motion";
import { PERSONAL_INFO, ACADEMIC_INFO, KNOWLEDGE_INFO } from "@/constants";
import { AstronautCanvas } from "./SpaceshipCanvas";

export const PersonalInfoCard = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-2 px-5 overflow-y-auto max-h-[80vh] pt-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <motion.div
        variants={slideInFromRight(0.5)}
        className="group [perspective:1400px] w-full max-w-[620px] h-[460px]"
      >
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl [backface-visibility:hidden]">
            <AstronautCanvas />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-500 [text-shadow:0_0_12px_rgba(129,140,248,0.9),0_0_32px_rgba(56,189,248,0.9)]">
                Datos personales
              </h1>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 [text-shadow:0_0_8px_rgba(15,23,42,0.9)]">
              Hover para ver detalles
            </p>
          </div>

          <div className="absolute inset-0 rounded-xl flex flex-col justify-center px-6 py-4 gap-4 text-gray-300 text-base md:text-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 [text-shadow:0_0_10px_rgba(129,140,248,0.9),0_0_26px_rgba(45,212,191,0.9)]">
              Información
            </h2>
            <div className="flex flex-col gap-1.5">
              {PERSONAL_INFO.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 text-sm md:text-base items-baseline"
                >
                  <span
                    className={`w-[120px] md:w-[150px] shrink-0 text-left font-semibold text-gray-400 [text-shadow:0_0_6px_rgba(15,23,42,0.9)] ${
                      item.label === "Fecha de nacimiento"
                        ? "whitespace-normal leading-tight"
                        : "whitespace-nowrap"
                    }`}
                  >
                    {item.label}:
                  </span>
                  <span className="text-gray-200 break-words [text-shadow:0_0_10px_rgba(15,23,42,0.9)]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between items-center text-[10px] text-gray-500">
              <span className="[text-shadow:0_0_8px_rgba(15,23,42,0.9)]">Space ID • 01</span>
              <span className="[text-shadow:0_0_8px_rgba(15,23,42,0.9)]">Verified</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const AcademicInfoCard = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-2 px-5 overflow-y-auto max-h-[80vh] pt-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <motion.div
        variants={slideInFromRight(0.5)}
        className="w-full max-w-[520px] flex flex-col gap-4 border border-[#7042f88b] bg-[#0300145e] p-4 rounded-xl shadow-lg shadow-[#2A0E61]/40"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Información Académica
        </h2>

        <div className="flex flex-col gap-3">
          {ACADEMIC_INFO.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 rounded-lg bg-black/30 px-4 py-3"
            >
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-base md:text-lg font-semibold text-white">
                  {item.title}
                </span>
                <span className="text-xs md:text-sm text-gray-400">
                  {item.date}
                </span>
              </div>
              <span className="text-sm md:text-base text-gray-300">
                {item.institution}
              </span>
              <span className="text-xs md:text-sm text-gray-400">
                {item.city}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const KnowledgeInfoCard = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-2 px-5 overflow-y-auto max-h-[80vh] pt-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <motion.div
        variants={slideInFromRight(0.5)}
        className="w-full max-w-[520px] flex flex-col gap-4 border border-[#7042f88b] bg-[#0300145e] p-4 rounded-xl shadow-lg shadow-[#2A0E61]/40"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Conocimientos
        </h2>

        <ul className="flex flex-col gap-2 list-disc list-inside">
          {KNOWLEDGE_INFO.map((item, index) => (
            <li
              key={index}
              className="text-sm md:text-base text-gray-300"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
