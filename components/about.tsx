"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";;

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  // const { ref, inView } = useInView();
  // const { setActiveSection } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView) {
  //     setActiveSection("About");
  //   }
  // }, []);
  return (
    <motion.section
      ref={ref}
      className="mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        During my Master's degree thesis, I learned about{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Redux, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">health and fitness.</span>
      </p>
    </motion.section>
  );
}
