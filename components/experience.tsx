"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <div>
        {experiencesData.map((experience, index) => {
          return (
            <React.Fragment key={index}>
              <div
                className="max-w-2xl flex flex-col justify-center gap-6 rounded-xl 
              shadow-xl bg-slate-200 border-2 mb-20 p-6 sm:p-8"
              >
                <h3 className="font-semibold capitalize">{experience.title}</h3>
                <p className="font-normal !mt-0">{experience.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 text-wrap">
                  {experience.description}
                </p>
                <p>{experience.date}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
