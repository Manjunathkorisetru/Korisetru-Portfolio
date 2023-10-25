"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

function contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <section ref={ref} id="contact" className="scroll-mt-28">
      <SectionHeading>Contact</SectionHeading>
      <p className="w-30 h-16 animate-blink">Work in Progress...</p>
    </section>
  );
}

export default contact;
