"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromRight } from "@/lib/motion";
import { ChevronDownIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { EXPERIENCE_DATA } from "@/constants";

export const ExperienceCards = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-2 px-5 overflow-y-auto max-h-[80vh] pt-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      {EXPERIENCE_DATA.map((item, index) => (
        <motion.div
          key={index}
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-5 w-full max-w-[400px] border border-[#7042f88b] bg-[#0300145e] p-2 rounded-lg shadow-lg hover:shadow-[#2A0E61]/50 transition-shadow duration-300 cursor-pointer"
          onClick={() => handleToggle(index)}
          layout
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-0 w-full">
              <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {item.title}
              </h1>
              <h2 className="text-sm text-gray-200 font-semibold">{item.company}</h2>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{item.date}</span>
                {item.certificate && (
                  <a
                    href={item.certificate}
                    download
                    onClick={(e) => e.stopPropagation()}
                    title="Certificado laboral"
                    className="text-gray-300 hover:text-cyan-400"
                  >
                    <ArrowDownTrayIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDownIcon className="text-gray-300 h-6 w-6" />
            </motion.div>
          </div>

          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden flex flex-col gap-2"
              >
                <div className="flex flex-col gap-2 w-full pt-0">
                  <h3 className="text-base font-semibold text-purple-400">Funciones:</h3>
                  {Array.isArray(item.description) ? (
                    <ul className="list-disc list-inside text-gray-300 text-sm text-justify w-full">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 text-sm text-justify w-full">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Achievements Section */}
                {item.achievements && (
                  <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-base font-semibold text-purple-400">Logros:</h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Boss Info Section */}
                {item.boss && (
                  <div className="flex flex-col gap-1 w-full mt-2 pt-0">
                    <div className="flex flex-col text-gray-300 text-sm">
                      <p><span className="font-medium text-gray-400">Jefe:</span> {item.boss[0]}</p>
                      <p><span className="font-medium text-gray-400">Celular:</span> {item.boss[1]}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
