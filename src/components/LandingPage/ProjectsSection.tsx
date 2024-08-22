"use client";

import React from "react";
import ProjectCard from "../reuseable/ProjectCard";

const ProjectsSection = () => {
  return (
    <section>
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col gap-10">
          <div className="flex-[1] flex-start w-full">
            <h1 className="text-primary text-3xl md:text-5xl font-bold uppercase underline">
              My Projects
            </h1>
          </div>
          <div className="flex-[2] w-full grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
            <ProjectCard
              title="Techsolace Meeting Application"
              tags="Video Conferencing, Modern, #NextJS, TailwindCSS"
              imageUrl="/images/Project-4.png"
              description="A modern, dark-themed video calling application for TechSolace’s video conferencing platform, featuring easy navigation for scheduling, joining, and recording meetings. 
              The design prioritizes functionality and user-friendliness."
              Redirect="https://meet.techsolace.in/"
            />
            <ProjectCard
              title="VIsual Studio Code Redesigned"
              tags="NextJS, Web Redesign, #CodeEditor, #FrontendDevelopment"
              imageUrl="/images/Project-2.png"
              description="Redesigned the Visual Studio Code website with a dark theme, focusing on clean UI, intuitive navigation, and improved user experience for developers."
              Redirect="https://vs-code-redesigned-clone.vercel.app/"
            />
            <ProjectCard
              title="Ecommerce Sample 1"
              tags="Ecommerce, Modern, NextJS, TailwindCSS"
              imageUrl="/images/Project-1.png"
              description="Created a modern, user-friendly e-commerce platform showcasing international fashion brands. The site 
              features seamless navigation, product search, and a smooth checkout experience. Built with Next.js and Tailwind CSS."
              Redirect="https://my-ecommerce-chi-silk.vercel.app/"
            />
            <ProjectCard
              title="Maruti Bakers Mart"
              tags="Pastry Website, Modern, #NextJS, TailwindCSS"
              imageUrl="/images/Project-3.png"
              description="A delightful website design for Maruti Pastries, showcasing handcrafted desserts with an emphasis on elegance and culinary artistry. 
              The layout is light, clean, and appetizing, reflecting the brand’s dedication to perfection."
              Redirect="https://marutibakersmart.com/"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default ProjectsSection;
