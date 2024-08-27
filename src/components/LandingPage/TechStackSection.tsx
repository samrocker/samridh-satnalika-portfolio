'use client'
import { BackendIcons, FrontendIcons } from "@/constants";
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
          <div className="w-full flex-between flex-col lg:flex-row gap-10">
            <div className="flex-[1] w-full flex-between flex-col gap-5">
              <div className="flex-center">
                <h1 className="text-2xl text-primary font-normal">FRONTEND</h1>
              </div>
              <div className="flex-center gap-3 md:gap-7 flex-wrap">
                {FrontendIcons.map((icon, key) => (
                  <Image 
                    src={icon.iconUrl} 
                    alt={icon.title} 
                    width={1000} 
                    height={1000}
                    className={`w-20 object-cover ${key === 3 ? 'w-44' : ''}`} 
                    key={key} 
                  />
                ))}
              </div>
            </div>
            <div className="flex-[1] w-full flex-between flex-col gap-5">
              <div className="flex-center">
                <h1 className="text-2xl text-primary font-normal">BACKEND</h1>
              </div>
              <div className="flex-center gap-5 md:gap-7 flex-wrap">
              {BackendIcons.map((icon, key) => (
                  <Image 
                    src={icon.iconUrl} 
                    alt={icon.title} 
                    width={1000} 
                    height={1000}
                    className={`w-44 object-cover ${key === 1 ? ' invert' : ''}`} 
                    key={key} 
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex-between gap-5">
          </div>
        </div>
      </main>
    </section>
  );
};

export default TechStackSection;
