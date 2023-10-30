"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 
      max-w-[53rem] text-center"
    >
      <SectionHeading>My experience</SectionHeading>
      <div>
        {experiencesData.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-4 rounded-xl 
              shadow-xl bg-slate-200 mb-6 sm:p-4"
          >
            <span className="font-semibold">{experience.title}</span>
            <p>{experience.location}</p>
            <p className=" text-gray-700 text-wrap">{experience.description}</p>
            <p>{experience.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
