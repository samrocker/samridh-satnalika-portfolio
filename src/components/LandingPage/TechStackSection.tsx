'use client'
import { FrontendIcons } from "@/constants";
import Image from "next/image";
import React from "react";

const TechStackSection = () => {
  return (
    <section>
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col gap-10">
          <div className="w-full flex-start">
            <h1 className="text-primary text-3xl md:text-5xl font-bold uppercase underline">
              SKILLSET
            </h1>
          </div>
          <div className="w-full flex-between gap-5">
            <div className="flex-[1] w-full flex-between flex-col">
              <div className="flex-center">
                <h1 className="text-2xl text-primary font-normal">FRONTEND</h1>
              </div>
              <div className="flex-between gap-3 flex-wrap">
                {FrontendIcons.map((icon, key) => (
                  <Image 
                    src={icon.iconUrl} 
                    alt={icon.title} 
                    width={1000} 
                    height={1000}
                    className="w-28 object-cover" 
                    key={key} 
                  />
                ))}
              </div>
            </div>
            <div className="flex-[1] w-full flex-between flex-col gap-5">
              <div className="flex-center">
                <h1 className="text-2xl text-primary font-normal">BACKEND</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex-between gap-5"></div>
        </div>
      </main>
    </section>
  );
};

export default TechStackSection;
