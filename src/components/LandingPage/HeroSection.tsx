import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col lg:flex-row gap-10 lg:gap-0">
          <div className="flex-[1] flex w-full flex-col gap-5 items-start justify-center">
            <span className="py-2 px-5 text-primary text-xs md:text-sm font-normal border-2 border-primary bg-primary/20 rounded-full">
              Hey I'am
            </span>
            <div className="flex flex-col">
              <h1 className="text-primary text-4xl md:text-5xl lg:text-7xl font-extrabold">
                SAMRIDH
              </h1>
              <h1 className="text-primary text-4xl md:text-5xl lg:text-7xl font-extrabold">
                SATNALIKA
              </h1>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-primary/75 font-normal max-w-[450px]">
                <span className="underline">Full-Stack Web Developer</span> with 4+ years of experience, crafting
                robust applications using Next.js with TypeScript and Node.js.
                Let's bring your ideas to life with clean, efficient code.
              </p>
            </div>
            
          </div>
          <div className="flex-[1] flex-center w-full gap-5">
            <Image src='/images/myPicture.JPG' alt="Samridh" width={1000} height={1000} className="w-full max-w-[550px] rounded-3xl border-2 border-primary" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
