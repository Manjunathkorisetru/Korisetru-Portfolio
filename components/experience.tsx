"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>My experience</SectionHeading>
      <div>
        <div className="min-w-[100rem] h-full flex flex-col justify-center items-center border-2">
          <div className="w-[0.25rem] bg-black top-0 flex flex-col ">
            {experiencesData.map((experience, index) => (
              <div
                className={` ${
                  index % 2 === 0 ? "self-start" : "self-end"
                } relative`}
              >
                <div className="absoulte right-10">manju</div>
                <div
                  className="last:mb-10 sm:mb-20 first:mt-10 ml-10 mr-10 
                  scroll-mt-20 bg-gray-200 min-w-[45rem] rounded-xl p-4 flex 
                  justify-center items-center min-h-[10rem] "
                >
                  <div> {experience.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
