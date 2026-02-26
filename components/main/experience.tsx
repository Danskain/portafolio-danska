"use client";

import React, { useState } from "react";
import { EarthCanvas } from "../sub/earth";
import { ExperienceMenu } from "../sub/ExperienceMenu";
import { ExperienceHeader } from "../sub/ExperienceHeader";
import { ExperienceCards } from "../sub/ExperienceCards";
import {
  PersonalInfoCard,
  AcademicInfoCard,
  KnowledgeInfoCard,
} from "../sub/PersonalInfoCard";

export const Experience = () => {
  const [activeSection, setActiveSection] = useState("Experiencia Laboral");

  return (
    <section
      id="experience"
      className="relative w-full h-screen overflow-hidden"
    >
      <EarthCanvas />

      <div className="relative z-10 grid w-full h-full px-3 gap-6 mt-0 md:grid-cols-3 md:px-4 md:gap-4">
        {/* Columna Izquierda */}
        <div className="w-full h-full flex flex-col items-center justify-center">
          <ExperienceMenu
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {/* Columna Central */}
        <div className="w-full h-full flex flex-col items-center justify-center">
          <ExperienceHeader />
        </div>

        {/* Columna Derecha */}
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center">
            {activeSection === "Datos Personales" && <PersonalInfoCard />}
            {activeSection === "Información Académica" && <AcademicInfoCard />}
            {activeSection === "Conocimientos" && <KnowledgeInfoCard />}
            {activeSection === "Experiencia Laboral" && <ExperienceCards />}
          </div>
        </div>
      </div>
    </section>
  );
};
