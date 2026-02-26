"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

interface ExperienceMenuProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const ExperienceMenu = ({ activeSection, setActiveSection }: ExperienceMenuProps) => {
  const menuItems = [
    "Datos Personales",
    "Información Académica",
    "Experiencia Laboral",
    "Conocimientos"
  ];

  return (
    <div className="h-full flex flex-col items-start justify-center gap-10 pl-10">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-8 w-full"
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveSection(item)}
            className={`text-xl font-medium cursor-pointer transition-all duration-300 hover:translate-x-2 
              ${activeSection === item 
                ? "text-purple-400 font-bold border-l-4 border-purple-500 pl-3" 
                : "text-gray-400 hover:text-white pl-3 border-l-4 border-transparent"
              }`}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
