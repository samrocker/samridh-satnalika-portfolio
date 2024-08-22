import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="w-full">
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col lg:flex-row gap-10">
          <div className="flex-[1] flex w-full flex-col gap-5 items-start justify-center">
            <span className="py-2 px-5 text-primary text-xs md:text-sm lg:text-lg font-semibold border-2 border-primary/50 bg-primary/10 rounded-full">
              Hey I'am
            </span>
            <div className="flex flex-col">
              <h1 className="text-primary text-4xl md:text-5xl lg:text-8xl font-extrabold">
                SAMRIDH
              </h1>
              <h1 className="text-primary text-4xl md:text-5xl lg:text-8xl font-extrabold">
                SATNALIKA
              </h1>
            </div>
            <div className="flex flex-col">
              <p className="text-sm lg:text-lg text-primary dark:text-primary/75 font-semibold max-w-[550px]">
                <span className="underline">Full-Stack Web Developer</span> with
                4+ years of experience, crafting robust applications using
                Next.js with TypeScript and Node.js. Let's bring your ideas to
                life with clean, efficient code.
              </p>
            </div>
            <div className="flex gap-5">
              <Button className="py-6 px-5 text-xl font-bold text-primary bg-secondary rounded-full border-2 border-primary/50 hover:text-secondary">Hire Me</Button>
            </div>
          </div>
          <div className="flex-[1] flex-end w-full gap-5">
            <Image
              src="/images/myPicture.JPG"
              alt="Samridh"
              width={1000}
              height={1000}
              className="w-full max-w-[550px] rounded-3xl border-2 border-primary/50"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
