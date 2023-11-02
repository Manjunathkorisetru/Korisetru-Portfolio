import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
//import rmtdevImg from "@/public/rmtdev.png";
import datacollection from "@/public/data-collection.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import FPGA from "@/public/FPGA.png";
import { data } from "autoprefixer";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer, Pickshare GmbH",
    location: "Dortmund, Germany",
    description:
      "I have designed and implemented a feature-rich Lastmile OS dashboard with advanced filtering, seamless shipment tracking, dynamic reporting, and rigorous testing, enhancing users' ability to efficiently manage and analyze ecosystem data for package deliveries.",
    icon: React.createElement(LuGraduationCap),
    date: "May-2019 to Sep-2023",
  },
  {
    title: "Frontend Developer, Mykori Technologies UG, Working Student ",
    location: "Bielefeld, Germany",
    description:
      "I have extensive experience encompassing programming in JavaScript, TypeScript, ES6, CSS, and HTML, as well as designing responsive UX/UI, architecting web applications with React, mobile applications with React Native,  and conducting independent research to evaluate relevant technologies, both independently and within a team context.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug-2021 to Mar-2022",
  },
  {
    title: "Service Delivery Specialist, IBM India Pvt Ltd",
    location: "Bangalore, India",
    description:
      "The tasks involved SAP NetWeaver 7.0 and MSSQL installation, performing a system refresh for the Sandbox system, and configuring Solution Manager along with setting up EWA Alerts.",
    icon: React.createElement(FaReact),
    date: "Jul-2016 to Mar-2019",
  },
  {
    title: "SAP Basis Administrator, Symbiosis Technologies",
    location: "Visakhapatnam, India",
    description:
      "The tasks involved daily monitoring of SAP systems, performing SAP system refreshes, and SAP Note Implementations.",
    icon: React.createElement(FaReact),
    date: "Jul-2015 to Jul-2016",
  },
  {
    title:
      "Intern (Trained in SAP Basis Technology to support for AT&T hosted customers)",
    location: "Bangalore, India",
    description:
      "The tasks involved Configuration of Central User Administration and SAP Note Implementations",
    icon: React.createElement(FaReact),
    date: "Jan-2015 to Jul-2015",
  },
] as const;

export const projectsData = [
  {
    title: "Data Collection Web App",
    description:
      "A Web App that is used for data collection from multiple users. It has features like authentication, data collection, data visualization and data export.",
    tags: ["React.js", "Express.js", "Mongoose", "MongoDB"],
    imageUrl: datacollection,
    link: "https://github.com/Manjunathkorisetru/Data-Collection-Frontend",
  },
  {
    title: "FPGA Web App",
    description:
      "A comprehensive database consisting of FPGA devices and their specifications from various vendors",
    tags: ["React", "JavaScript", "MongoDB", "Express", "Mongoose"],
    imageUrl: FPGA,
    link: "https://fpgawebapp.netlify.app/",
  },
  {
    title: "CorpComment",
    description: "Users can give public feedback to companies.",
    tags: ["React", "Tailwind"],
    imageUrl: corpcommentImg,
    link: "https://corp-comment.netlify.app/",
  },

  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Tailwind"],
    imageUrl: wordanalyticsImg,
    link: "https://word-analytics.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
