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
              title="Ecommerce Sample 1"
              tags="Ecommerce, Modern, #NextJS, TailwindCSS"
              imageUrl="/images/Project-1.png"
              description="Created a modern, user-friendly e-commerce platform showcasing international fashion brands. The site 
              features seamless navigation, product search, and a smooth checkout experience. Built with Next.js and Tailwind CSS."
              className="bg-white/10"
              Redirect='https://my-ecommerce-chi-silk.vercel.app/'
            />
            <ProjectCard
              title="VIsual Studio Code Redesigned"
              tags="Ecommerce, Modern, #NextJS, TailwindCSS"
              imageUrl="/images/Project-2.png"
              description="Redesigned the Visual Studio Code website with a dark theme, focusing on clean UI, intuitive navigation, and improved user experience for developers."
              className="bg-white/10"
              Redirect='https://vs-code-redesigned-clone.vercel.app/'
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default ProjectsSection;
